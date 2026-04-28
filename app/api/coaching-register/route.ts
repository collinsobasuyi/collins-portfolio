import { Resend } from "resend";
import nodemailer from "nodemailer";

const resend = new Resend(process.env.RESEND_API_KEY);

const gmailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name = "",
      email = "",
      background = "",
      role = "",
      challenge = "",
      source = "",
      working = "",
      goal = "",
    } = body as {
      name: string;
      email: string;
      background: string;
      role: string;
      challenge: string;
      source: string;
      working: string;
      goal: string;
    };

    if (!name || !email || !background || !role || !challenge || !source || !working) {
      return Response.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const meetLink = process.env.GOOGLE_MEET_LINK ?? "";

    // Notification to Collins via Resend
    await resend.emails.send({
      from: "Collins Portfolio <onboarding@resend.dev>",
      to: ["collins.product.ai@gmail.com"],
      subject: `New Saturday Session Registration: ${name}`,
      replyTo: email,
      html: `
        <h2>New Saturday Session Registration</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Background:</strong> ${background}</p>
        <p><strong>Role aiming for:</strong> ${role}</p>
        <p><strong>Biggest challenge:</strong> ${challenge}</p>
        <p><strong>How they heard about this:</strong> ${source}</p>
        <p><strong>Currently working:</strong> ${working}</p>
        <p><strong>What they want from the session:</strong> ${goal || "Not provided"}</p>
        <p><strong>Registered at:</strong> ${new Date().toUTCString()}</p>
      `,
    });

    // Confirmation to registrant via Gmail
    await gmailTransport.sendMail({
      from: `Collins Obasuyi <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "You're registered — Saturday Sessions with Collins",
      html: `
        <h2>You're in, ${name}.</h2>
        <p>Thanks for registering for the Saturday Tech Sessions.</p>

        <h3>Your Google Meet link</h3>
        <p><a href="${meetLink}">${meetLink}</a></p>

        <h3>Session details</h3>
        <ul>
          <li><strong>When:</strong> Every Saturday, 3:00pm – 5:00pm UK time</li>
          <li><strong>Format:</strong> Live Q&A via Google Meet</li>
        </ul>

        <p>The link above works every Saturday — save it and join any week you like.</p>
        <p>See you Saturday.</p>
        <p>— Collins</p>
      `,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Registration error:", error);
    return Response.json(
      { success: false, error: "Failed to send registration." },
      { status: 500 }
    );
  }
}
