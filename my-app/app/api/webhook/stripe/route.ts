// app/api/webhook/stripe/route.ts
import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// Helper: read raw body as text
async function buffer(readable: ReadableStream<Uint8Array>) {
  const chunks = [];
  const reader = readable.getReader();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }

  return Buffer.concat(chunks);
}

export async function POST(request: Request) {
  const bodyBuffer = await buffer(request.body as ReadableStream<Uint8Array>);
  const sig = (await headers()).get("stripe-signature");

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      bodyBuffer,
      sig!,
      endpointSecret
    );
  } catch (err: any) {
    console.error("❌ Error verifying webhook signature:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle event types
  switch (event.type) {
    case "checkout.session.completed":
      console.log("✅ Checkout session completed:", event.data.object);
      break;
    case "invoice.payment_succeeded":
      console.log("💰 Subscription payment succeeded:", event.data.object);
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
