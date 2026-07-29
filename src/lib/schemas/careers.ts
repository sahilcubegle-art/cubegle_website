import { z } from "zod";

export const careersSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email address"),
  applicantType: z.string().min(1, "Select the option that best describes you"),
  interest: z.string().min(1, "Select an area of interest"),
  resumeLink: z
    .string()
    .trim()
    .min(1, "Add a link to your resume or portfolio (Drive, LinkedIn, GitHub, etc.)"),
  message: z.string().trim().min(20, "Add a few more details (at least 20 characters)"),
  website: z.string().max(0, "Invalid submission").optional(),
});

export type CareersFormValues = z.infer<typeof careersSchema>;
