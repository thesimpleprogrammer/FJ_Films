// import Stripe from 'stripe';
// import { NextResponse } from 'next/server';

// if (!process.env.STRIPE_SECRET_KEY) {
//   throw new Error('STRIPE_SECRET_KEY environment variable is not set.');
// }
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// export async function POST() {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       // payment_method_types: ['card'],
//       mode: 'payment',
//       ui_mode: 'embedded',
//       line_items: [
//         {
//           price_data: {
//             currency: 'usd',
//             product_data: { name: 'Test Product' },
//             unit_amount: 2000, // $20.00
//           },
//           quantity: 1,
//         },
//       ],
//       return_url: 'http://localhost:3000/return?session_id={CHECKOUT_SESSION_ID}'
//       // success_url: 'http://localhost:3000/success',
//       // cancel_url: 'http://localhost:3000/cancel',
//     });

//     return NextResponse.json({ checkoutSessionClientSecret: session.client_secret });
//   } catch (err) {
//     return NextResponse.json({ error: err }, { status: 500 });
//   }
// }
// import Stripe from "stripe";
// import { NextResponse } from 'next/server'

// if (!process.env.STRIPE_SECRET_KEY) {
//   throw new Error('STRIPE_SECRET_KEY environment variable is not set.');
// }
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


// export async function POST(request: Request) {
//   const body = await request.json()

//   const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: [
//         {
//           price_data: {
//             currency: 'usd',
//             product_data: {
//               name: 'Your Product Name',
//             },
//             unit_amount: 1000, // Price in cents
//           },
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `localhost:3000/success`,
//       cancel_url: `localhost:3000/cancel`,
//     });
  
//   return NextResponse.json({ sessionId: session.id })
// }

// app/api/checkout-sessions/route.ts
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
});

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");
    const body = await request.json();
    // console.log("Request body:", body);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Your Product Name",
            },
            unit_amount: body.itemPrice, // Price in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 },
    );
  }
}
