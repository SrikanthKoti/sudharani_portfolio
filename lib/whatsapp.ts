import { createWasender } from "wasenderapi";

const apiKey = process.env.WASENDER_API_KEY;
const baseUrl = process.env.WASENDER_API_BASE_URL;

let wasenderInstance: ReturnType<typeof createWasender> | null = null;

function getWasender() {
  if (!apiKey?.trim()) return null;
  if (!wasenderInstance) {
    wasenderInstance = createWasender(
      apiKey.trim(),
      undefined,
      baseUrl?.trim() || undefined,
      undefined,
      undefined,
      undefined
    );
  }
  return wasenderInstance;
}

/**
 * True if the recipient is a group or channel JID (use as-is, do not normalize to E.164).
 */
function isGroupOrChannelJid(to: string): boolean {
  const t = to.trim();
  return t.includes("@g.us") || t.includes("@newsletter");
}

/**
 * Normalize phone number to E.164 (e.g. 918019263077 -> +918019263077).
 */
function toE164(to: string): string {
  const digits = to.replace(/\D/g, "");
  return digits.startsWith("+") ? to : `+${digits}`;
}

/**
 * Send a WhatsApp text message via WasenderAPI. No-op if WASENDER_API_KEY is not set.
 * Recipient can be an E.164 phone number or a Group JID (e.g. 120363424863065173@g.us).
 */
export async function sendWhatsAppMessage(
  to: string,
  text: string
): Promise<{ sent: boolean; error?: string }> {
  const client = getWasender();
  if (!client) {
    return { sent: false };
  }

  const recipient = isGroupOrChannelJid(to)
    ? to.trim()
    : toE164(to);

  if (!recipient || recipient === "+" || recipient.length < 2) {
    return { sent: false, error: "Invalid recipient number" };
  }

  try {
    await client.sendText({ to: recipient, text });
    return { sent: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("[WhatsApp] sendWhatsAppMessage failed:", message);
    return { sent: false, error: message };
  }
}
