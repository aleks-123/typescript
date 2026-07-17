console.log("test");
console.log("Hello");
console.log("test3");
console.log("branch");

//! npm init -y incicijalizaranje na proekt
//! npm install typescript
//! npx ts --init

//! 1. Basic types

const firstName: String = "Petar";
const age: number = 21;
const isStudent: boolean = true;

///////

//! 2. type inference
let city = "Skopje";
// city = 23;

console.log(city);
//////////

//! 3. Array

const ocenki: number[] = [10, 2, 5];
const studenti: string[] = ["Ana", "Marko", "Sanja"];
const gradovi: Array<string> = ["Skopje", "Veles", "Probishtip"];

//! 4. Objects

const user: {
  name: string;
  age: number;
  student: boolean;
} = {
  name: "Natasha",
  age: 35,
  student: true,
};

//! Custom type

type Student = {
  name: string;
  age: number;
  student: boolean;
};

const studentOne: Student = {
  name: "Pero",
  age: 40,
  student: false,
};

const studentTwo: Student = {
  name: "Petra",
  age: 40,
  student: false,
};

//! function

function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return "Hellon " + name;
}

function greet1(name: string): void {
  return console.log("hello");
}

console.log(greet("Vasko"));

//! Optional properties

type Course = {
  id: number | string;
  title: string;
  duration: number;
  description?: string;
};

const courseOne: Course = {
  id: "t 28",
  title: "nextjs",
  duration: 20,
  description: "javascript",
};

///////////

type SemosStudent = {
  ime: string;
  prosek: number;
  grad: string;
};

const studentiSemos: SemosStudent[] = [
  { ime: "Pero", prosek: 2, grad: "Kriva Palanka" },
  { ime: "Perojca", prosek: 5, grad: "Kriva Palanka" },
  { ime: "Stojko", prosek: 10, grad: "Kriva Palanka" },
];

const filtriraniStudenti: SemosStudent[] = studentiSemos.filter((student: SemosStudent) => student.prosek > 5);
