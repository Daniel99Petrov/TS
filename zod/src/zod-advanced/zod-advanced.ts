// Optional and Required Fields
import {
  AgeSchema,
  CombinedSchema,
  NameSchema,
  RoleSchema,
  UserSchema,
} from "./zod-advanced.static";

const validInput = { name: "Alice" }; // OK, email missing but optional
const invalidInput = {}; // Missing required 'name' field

console.log(UserSchema.safeParse(validInput).success); // true
console.log(UserSchema.safeParse(invalidInput).success); // false

// Transformations and Refinements
console.log(NameSchema.parse("  Alice  ")); // "Alice" (trimmed)
console.log(AgeSchema.safeParse(15)); // Error: Must be adult

// Merge
// Valid input must have all fields from Admin AND User
const combinedInput = {
  adminLevel: 10, // from Admin
  role: "admin", // from Admin
  userId: "user42", // from User
};

console.log(CombinedSchema.safeParse(combinedInput)); // success: true

// Unions
// Example inputs
const adminInput = { role: "admin", adminLevel: 1 };
const userInput = { role: "user", userId: "abc123" };
const invalidRoleInput = { role: "admin", userId: "should-fail" };

console.log(RoleSchema.safeParse(adminInput)); // success: true
console.log(RoleSchema.safeParse(userInput)); // success: true
console.log(RoleSchema.safeParse(invalidRoleInput)); // success: false
