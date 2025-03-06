import { z } from "zod";

export const workExperienceSchema = z.object({
  companyName: z.string().min(1, "Company Name is required"),
  jobTitle: z.string().min(1, "Job Title is required"),
  startDate: z.string().min(1, "Start Date is required"),
  endDate: z.string().optional(),
  location: z.string().optional(),
  contributions: z
    .array(z.string().min(1, "Contribution cannot be empty"))
    .optional(),
});

export type WorkExperienceFormData = z.infer<typeof workExperienceSchema>;
