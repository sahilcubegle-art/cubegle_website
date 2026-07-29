import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email address"),
  company: z.string().trim().min(1, "Enter your company name"),
  engagement: z.string().min(1, "Select an engagement type"),
  interest: z.string().min(1, "Select an area of interest"),
  message: z.string().trim().min(20, "Add a few more details (at least 20 characters)"),
  website: z.string().max(0, "Invalid submission").optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
