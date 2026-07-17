"use strict";
console.log("test");
console.log("Hello");
console.log("test3");
console.log("branch");
//! npm init -y incicijalizaranje na proekt
//! npm install typescript
//! npx ts --init
//! 1. Basic types
const firstName = "Petar";
const age = 21;
const isStudent = true;
///////
//! 2. type inference
let city = "Skopje";
// city = 23;
console.log(city);
//////////
//! 3. Array
const ocenki = [10, 2, 5];
const studenti = ["Ana", "Marko", "Sanja"];
const gradovi = ["Skopje", "Veles", "Probishtip"];
//! 4. Objects
const user = {
    name: "Natasha",
    age: 35,
    student: true,
};
const studentOne = {
    name: "Pero",
    age: 40,
    student: false,
};
const studentTwo = {
    name: "Petra",
    age: 40,
    student: false,
};
//! function
function add(a, b) {
    return a + b;
}
function greet(name) {
    return "Hellon " + name;
}
function greet1(name) {
    console.log("hello");
}
console.log(greet("Vasko"));
