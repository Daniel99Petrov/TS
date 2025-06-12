import { z } from "zod";

export const GreetSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

export type GreetInput = z.infer<typeof GreetSchema>;