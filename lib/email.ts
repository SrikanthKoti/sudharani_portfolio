import { Resend } from "resend";

type ContactPayload = {
  name: string;
  grade: string;
  email: string;
  phone: string;
  message: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.RESEND_FROM_EMAIL;
const toEmail = process.env.RESEND_TO_EMAIL;

// Resend requires a verified sender domain. Gmail cannot be verified in Resend.
// Use Resend's test sender so mail still goes to RESEND_TO_EMAIL (your inbox).
const RESEND_TEST_FROM = "onboarding@resend.dev";

function getEffectiveFrom(): string {
  if (fromEmail && !fromEmail.includes("@gmail.com")) {
    return fromEmail;
  }
  return RESEND_TEST_FROM;
}

if (!resendApiKey) {
  // Fail fast on the server if misconfigured
  throw new Error("RESEND_API_KEY is not set");
}

const resend = new Resend(resendApiKey);

export async function sendContactEmail(payload: ContactPayload) {
  const effectiveTo = toEmail?.trim();
  if (!effectiveTo) {
    throw new Error("RESEND_TO_EMAIL is not set");
  }

  const effectiveFrom = getEffectiveFrom();

  const { name, grade, email, phone, message } = payload;

  const subject = `New contact from ${name} (${grade})`;

  const textBody = [
    "New Booking / Contact Request",
    "",
    `Name: ${name}`,
    `Grade: ${grade}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const htmlBody = `
    <h2>New Booking / Contact Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Grade:</strong> ${grade}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br />")}</p>
  `;

  const result = await resend.emails.send({
    from: effectiveFrom,
    to: effectiveTo,
    subject,
    text: textBody,
    html: htmlBody,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result;
}

