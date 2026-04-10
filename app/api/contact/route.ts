import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name = "",
      email = "",
      topic = "",
      currentSituation = "",
      outcome = "",
      message = "",
    } = body;

    const data = await resend.emails.send({
      from: "Collins Portfolio <onboarding@resend.dev>",
      to: ["collins.product.ai@gmail.com"],
      subject: `New Enquiry: ${topic || "General"}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Topic:</strong> ${topic}</p>

        <hr/>

        <p><strong>Current Situation:</strong></p>
        <p>${currentSituation || "Not provided"}</p>

        <p><strong>Desired Outcome:</strong></p>
        <p>${outcome || "Not provided"}</p>

        <p><strong>Additional Info:</strong></p>
        <p>${message || "Not provided"}</p>
      `,
    });

    return Response.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { success: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}