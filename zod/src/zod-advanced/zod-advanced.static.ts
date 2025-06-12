import { z } from "zod";

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email().optional(),  // Optional email field
});

export const NameSchema = z.string()
  .min(1, "Name required")
  .transform(name => name.trim());   // Trim whitespace after validation

export const AgeSchema = z.number()
  .refine(age => age >= 18, { message: "Must be adult" }); // Custom rule


const Admin = z.object({ role: z.literal("admin"), adminLevel: z.number() });
const User = z.object({ role: z.literal("user"), userId: z.string() });

// Accept either Admin OR User
export const RoleSchema = z.union([Admin, User]);

// Require both sets of fields combined
export const CombinedSchema = Admin.merge(User);


export const PasswordSchema = z.string()
  .min(8, "Password must be at least 8 characters")
  .max(20, "Password must not exceed 20 characters");