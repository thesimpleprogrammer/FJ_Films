import { render } from "@react-email/render";
import { EmailComponent } from "@/app/src/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const receiverEmail = process.env.BOOKING_EMAIL;

export async function POST(req: Request) {
  const body = await req.json();

  console.log("It reached here 1...");

  const {
    name,
    email,
    phone,
    packageType,
    selectedPackage,
    customDetails,
    budget,
    eventType,
    eventDate,
    consultationMethod,
    notes,
  } = body;

  if (!name || !email || !eventType || !consultationMethod) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }
  // 🔖 AUTO TAG
  const leadTag =
    packageType === "custom" ? "CUSTOM PACKAGE" : selectedPackage.toUpperCase();

  try {
    if (!receiverEmail) {
      return Response.json(
        { error: "Receiver email not configured" },
        { status: 500 }
      );
    }

    const html = await render(
      <EmailComponent
        name={name}
        email={email}
        phone={phone}
        packageType={packageType}
        selectedPackage={selectedPackage}
        customDetails={customDetails}
        budget={budget}
        eventType={eventType}
        eventDate={eventDate}
        consultationMethod={consultationMethod}
        notes={notes}
        leadTag={leadTag || "UNKNOWN"}
      />
    );

    console.log("Here too");
    
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: receiverEmail,
      replyTo: email,
      subject: `New Booking Request - ${leadTag}`,
      html,
    });

    if (error) {
      console.log("This is the error: ", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
