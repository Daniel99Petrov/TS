// Union: value can be one of several types
type ID = string | number;

let userId: ID = "abc123";
userId = 42;

// Intersection: combine multiple object types
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged;

const person: Person = { name: "Alice", age: 30 };
// const personWithoutName: Person = { age: 30 };

// Generic function that returns the first element of an array
function getFirst<T>(list: T[]): T {
  return list[0];
}
// Using with strings
const firstUser = getFirst<string>(["Alice", "Bob"]);
console.log(firstUser); // "Alice"

// Using with numbers
const firstScore = getFirst<number>([10, 20, 30]);
console.log(firstScore); // 10

// const numArray = [4, 56, 6]
// const firstString = getFirst<string>(numArray);

type Person2 = { name: string; age: number; email: string };

// Partial: makes all fields optional
type PartialPerson2 = Partial<Person2>;

// Pick: select only specific fields
type NameOnly = Pick<Person2, "name">;

// Omit: exclude specific fields
type WithoutEmail = Omit<Person2, "email">;

// Function Parameters in TypeScript
function square(x: number): number {
  return x * x;
}

function greet({ name, lastName }: { name: string; lastName: string }): void {
  console.log(`Hello ${name}, lastName ${lastName}`);
}

function greetBadExample(name: string, lastName: string): void {
  console.log(`Hello ${name}, lastName ${lastName}`);
}

greet({ name: "Daniel", lastName: "Petrov" });
greetBadExample("Petrov", "Daniel");
