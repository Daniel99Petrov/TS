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

let variable = 32;
variable = 33;
// variable = "hey";
variable = "hey" as unknown as number;

const constant = 32;
// greet({name: constant});



// Array of numbers
let scores: number[] = [90, 85, 70];
let scoresInference = [90, 85, 70];

// Tuple: fixed length & types
let user: [string, number] = ["Alice", 30];
let userInference = ["Alice", 30];


interface Person {
  name: string;
  age: number;
}

let personWithNoInterface = {
  name: "Alice",
  age: 30,
  nationality: "British"
};

let person: Person = {
  name: "Alice",
  age: 30,
  // nationality: "British"
};

person.name = "Daniel"