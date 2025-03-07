import { z } from "zod";

// Helper function to check and format dates
const formatDate = (date: string) => {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) return false; // Invalid date
  return parsedDate.toISOString().split("T")[0]; // Returns YYYY-MM-DD
};

export const workExperienceSchema = z.object({
  companyName: z.string().min(8, "Valid company Name is required"),
  jobTitle: z.string().min(8, "Job Title is required"),
  startDate: z
    .string()
    .min(1, "Start Date is required")
    .refine((date) => formatDate(date), "Invalid Start Date")
    .transform((date) => formatDate(date)),
  endDate: z
    .string()
    .min(1, "End Date is required")
    .refine((date) => formatDate(date), "Invalid End Date")
    .transform((date) => formatDate(date)),
  location: z.string().optional(),
  contributions: z
    .array(z.string().min(1, "Contribution cannot be empty"))
    .optional(),
});

export type WorkExperienceFormData = z.infer<typeof workExperienceSchema>;

export const professionalSummarySchema = z.object({
  summary: z.string().min(20, "Valid Summa is required"),
});
export type ProfessionalSummaryFormData = z.infer<
  typeof professionalSummarySchema
>;
