import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas/contact";
import { engagementOptions, interestAreas } from "@/content/contact-options";
import { siteConfig } from "@/config/site";
import { sendMail } from "@/lib/mail";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid submission" }, { status: 400 });
  }

  const values = parsed.data;

  if (values.website) {
    return NextResponse.json({ ok: true });
  }

  const engagementLabel =
    engagementOptions.find((option) => option.value === values.engagement)?.label ?? values.engagement;
  const interestLabel =
    interestAreas.find((option) => option.value === values.interest)?.label ?? values.interest;

  const subject = `New enquiry from ${values.name} (${values.company})`;
  const text = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company: ${values.company}`,
    `Engagement type: ${engagementLabel}`,
    `Area of interest: ${interestLabel}`,
    "",
    values.message,
  ].join("\n");

  try {
    await sendMail({
      to: siteConfig.email.general,
      replyTo: values.email,
      subject,
      text,
    });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json({ ok: false, error: "Could not send your message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
