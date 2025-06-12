import { GreetSchema, type GreetInput } from "./main.static";

function greet({ name }: GreetInput) {
  console.log("Hello, " + name.toUpperCase());
}

const button = document.getElementById("greet-btn") as HTMLButtonElement;
const input = document.getElementById("name-input") as HTMLInputElement;

button.addEventListener("click", () => {
  const parsed = GreetSchema.safeParse({ name: input.value.trim() });

  if (parsed.success) {
    greet(parsed.data); // fully type-safe
  } else {
    console.error("Validation error:", parsed.error.errors[0].message);
  }
});
