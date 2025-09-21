import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");
const requiredBioString = z.string().trim().min(10, "Required");

export const signUpSchema = z.object({
  email: requiredString.email("Invalid email address"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Only letters, numbers, - and _ allowed",
  ),
  name: requiredString,
  bio: requiredBioString,
  password: requiredString.min(8, "Must be at least 8 characters"),
});

export type signUpSchemaTypes = z.infer<typeof signUpSchema>;

export const passwordSchema = z
  .string()
  .min(1, { message: "Password is required" })
  .min(8, { message: "Password must be at least 8 characters" })
  .regex(/[^A-Za-z0-9]/, {
    message: "Password must contain at least one special character",
  });

export const loginSchema = z.object({
  email: z.email({ message: "Please enter a valid email" }),
  password: z.string().min(1, { message: "Password is required" }),
  rememberMe: z.boolean().optional(),
});

export type LoginSchemaTypes = z.infer<typeof loginSchema>;

export const createProjectSchema = z.object({
  title: requiredString,
  shortDesc: z.string().min(10, "Minimum of 10 characters").max(20, "Must be at most 20 characters"),
  longDesc: z.string().min(50, "Minimum of 50 characters").max(1000, "Must be at most 1000 characters"),
  featuredImage: z.string(),
  version: z.number(),
  slug: z.string(),
  //TODO: image & technologies validation that will accept zod validation for array of strings
  images: z.string(),
  technologies: z.string(),
  tags: z.string(),
  urlLive: z.url(),
  repoUrl: z.url(),
});

export type CreateProjectSchemaTypes = z.infer<typeof createProjectSchema>;

export const updateUserProfileSchema = z.object({
  displayName: requiredString,
  bio: z.string().max(1000, "Must be at most 1000 characters"),
});

export type UpdateUserProfileSchemaTypes = z.infer<typeof updateUserProfileSchema>;

export const createCommentSchema = z.object({
  content: requiredString,
});

export type CreateCommentSchemaTypes = z.infer<typeof createCommentSchema>;

export const contactFormSchema = z.object({
  title: z.string().min(1, "Required").max(100, "Must be at most 100 characters"),
  message: z.string().min(1, "Required").max(1000, "Must be at most 1000 characters"),
  email: requiredString.email("Invalid email address"),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;
