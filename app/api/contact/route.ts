import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  grade: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  message: z.string().min(1).max(1000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "validation_error",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    await sendContactEmail(parsed.data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error handling contact form submission:", error);

    return NextResponse.json(
      {
        success: false,
        error: "email_failed",
      },
      { status: 500 }
    );
  }
}

