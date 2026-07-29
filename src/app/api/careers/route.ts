import { NextResponse } from "next/server";
import { careersSchema } from "@/lib/schemas/careers";
import { applicantTypes, interestAreas } from "@/content/careers-options";
import { siteConfig } from "@/config/site";
import { sendMail } from "@/lib/mail";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = careersSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid submission" }, { status: 400 });
  }

  const values = parsed.data;

  if (values.website) {
    return NextResponse.json({ ok: true });
  }

  const applicantTypeLabel =
    applicantTypes.find((option) => option.value === values.applicantType)?.label ?? values.applicantType;
  const interestLabel =
    interestAreas.find((option) => option.value === values.interest)?.label ?? values.interest;

  const subject = `Application: ${values.name} (${applicantTypeLabel})`;
  const text = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Applying as: ${applicantTypeLabel}`,
    `Area of interest: ${interestLabel}`,
    `Resume / portfolio: ${values.resumeLink}`,
    "",
    values.message,
  ].join("\n");

  try {
    await sendMail({
      to: siteConfig.email.hr,
      replyTo: values.email,
      subject,
      text,
    });
  } catch (error) {
    console.error("Failed to send careers email", error);
    return NextResponse.json({ ok: false, error: "Could not send your application. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
