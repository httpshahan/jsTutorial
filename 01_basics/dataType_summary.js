//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// use for unique
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //not giving true or same value

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Iqbal", "Imran", "Azam"];
let myObj = {
    name: "shani",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// https://262.ecma-international.org/5.1/#sec-11.4.3



// stack memory used in primitive
// giving the copy of the original data

let a = 1;
let b  = a;
b = 3

console.log(a);  // 1
console.log(b);  // 3

// Heap in non-primitive
// giving the refference to the original data

let obj = {
    email: "hello@mail.com",
    name: "Ali"
}
let obj2 = obj

obj2.name = "Shani";
console.log(obj2.name); //Shani
console.log(obj.name);  //Shani