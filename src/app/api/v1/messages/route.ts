import { NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const body = await request.json();

  await fetch('https://api.mailchannels.net/tx/v1/send', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [
        { 
          // @ts-ignore
          to: [{ email: process.env.EMAIL_SEND_TO }],
          dkim_domain: "moshinremedia.com",
          dkim_selector: "mailchannels",
          dkim_private_key: process.env.DKIM_PRIVATE_KEY
        },
      ],
      from: {
        email: 'contact-form@moshinremedia.com',
        name: '✉️ Contact Form Submission',
      },
      reply_to: {
        //@ts-ignore
        email: body.message.email,
        //@ts-ignore
        name: body.message.name,
      },
      subject: 'New contact form submission!',
      content: [
        {
          type: 'text/plain',
          //@ts-ignore
          value: `Name: ${body.message.name}\n\nPhone Number: ${body.message.phoneNumber}\n\nEmail: ${body.message.email}\n\nServices: ${(body.message.services ?? []).length ? body.message.services.join(", ") : "N/A"}\n\nMessage: ${body.message.message ?? "N/A"}`,
        },
      ],
    }),
  });

  return new Response(undefined, {
    status: 200
  });
}