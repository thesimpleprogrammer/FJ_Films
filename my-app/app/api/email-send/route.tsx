// import { render } from "@react-email/render";
// import { EmailComponent } from "@/app/src/components/email-template";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const receiverEmail = process.env.BOOKING_EMAIL;

// export async function POST(req: Request) {
//   const body = await req.json();

//   console.log("It reached here 1...");

//   const {
//     name,
//     email,
//     phone,
//     packageType,
//     selectedPackage,
//     customDetails,
//     budget,
//     eventType,
//     eventDate,
//     consultationMethod,
//     notes,
//   } = body;

//   if (!name || !email || !eventType || !consultationMethod) {
//     return Response.json({ error: "Missing required fields" }, { status: 400 });
//   }
//   // 🔖 AUTO TAG
//   const leadTag =
//     packageType === "custom" ? "CUSTOM PACKAGE" : selectedPackage.toUpperCase();

//   try {
//     if (!receiverEmail) {
//       return Response.json(
//         { error: "Receiver email not configured" },
//         { status: 500 }
//       );
//     }

//     const html = await render(
//       <EmailComponent
//         name={name}
//         email={email}
//         phone={phone}
//         packageType={packageType}
//         selectedPackage={selectedPackage}
//         customDetails={customDetails}
//         budget={budget}
//         eventType={eventType}
//         eventDate={eventDate}
//         consultationMethod={consultationMethod}
//         notes={notes}
//         leadTag={leadTag || "UNKNOWN"}
//       />
//     );

//     console.log("Here too");
    
//     const { data, error } = await resend.emails.send({
//       from: "newclient@notification.thefjfilms.com",
//       to: receiverEmail,
//       replyTo: email,
//       subject: `New Booking Request - ${leadTag}`,
//       html,
//     });

//     if (error) {
//       console.log("This is the error: ", error);
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }


import { render } from "@react-email/render";
import { Resend } from "resend";

import { BookingEmail } from "@/app/src/components/booking-email";
import { PodcastEmail } from "@/app/src/components/podcast-email";
import { BroadcastEmail } from "@/app/src/components/broadcast-email";

const resend = new Resend(process.env.RESEND_API_KEY);
const receiverEmail = process.env.BOOKING_EMAIL;

type FormType = "booking" | "podcast" | "contact" | "broadcast";

export async function POST(req: Request) {
  const body = await req.json();
  const { formType } = body;

  if (!formType) {
    return Response.json({ error: "formType is required" }, { status: 400 });
  }

  try {
    if (!receiverEmail) {
      return Response.json(
        { error: "Receiver email not configured" },
        { status: 500 }
      );
    }

    let subject = "";
    let html = "";

    /* ---------------- FORM SWITCH ---------------- */
    switch (formType as FormType) {
      case "booking": {
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
          business,
        } = body;

        if (!name || !email || !eventType || !consultationMethod) {
          return Response.json(
            { error: "Missing required booking fields" },
            { status: 400 }
          );
        }

        const leadTag =
          packageType === "custom"
            ? "CUSTOM PACKAGE"
            : selectedPackage?.toUpperCase() ?? "UNKNOWN";

        html = await render(
          <BookingEmail
            {...body}
            leadTag={leadTag}
          />
        );

        subject = `New Booking Request - ${leadTag}`;
        break;
      }

      case "podcast": {
        const { name, email, podcastService, podcastStage, message } = body;

        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Podcast Service: ", podcastService);

        if (!name || !email || !podcastService) {
          return Response.json(
            { error: "Missing required podcast fields" },
            { status: 400 }
          );
        }

        html = await render(
          <PodcastEmail
            name={name}
            email={email}
            podcastService={podcastService}
            podcastStage={podcastStage}
            message={message}
          />
        );

        subject = `New Podcast Inquiry - ${podcastService}`;
        break;
      }

      case "broadcast": {
        const { name, email, message } = body;

        if (!name || !email || !message) {
          return Response.json(
            { error: "Missing required contact fields" },
            { status: 400 }
          );
        }

        html = await render(
          <BroadcastEmail name={name} email={email} message={message} />
        );

        subject = `New Contact Message`;
        break;
      }

      default:
        return Response.json(
          { error: "Unsupported formType" },
          { status: 400 }
        );
    }

    /* ---------------- SEND EMAIL ---------------- */
    const { data, error } = await resend.emails.send({
      from: "newclient@notification.thefjfilms.com",
      to: receiverEmail,
      replyTo: body.email,
      subject,
      html,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}