function greet({ name }: { name: string }) {
  console.log("Hello, " + name.toUpperCase());
}

const button = document.getElementById("greet-btn") as HTMLButtonElement;
const input = document.getElementById("name-input") as HTMLInputElement;

button.addEventListener("click", () => {
  const name = input.value.trim();
  if (name) {
    greet({ name });
  } else {
    console.log("Please enter a name.");
  }
});
