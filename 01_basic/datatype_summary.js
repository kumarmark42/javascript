// Primitive type
// 7 types: string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreNew = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

let BigNum = 6846844846534654n
console.log(typeof BigNum);




// Reference type (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "junierG", "hero"];

let myObj = {
    name: "Manish",
    age: 22
}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof name);


const myFunction = function(){
    console.log("Hello World");
}

console.log(myFunction);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myYtName = "Manish123"
let mynewYtName = myYtName

console.log(mynewYtName);
mynewYtName = "Manish42"
console.log(mynewYtName);

let userOne = {
    email: "user@google.com",
    name: "Manish",
    age: 22
}

let userTwo = userOne
console.log(userTwo.email);

userTwo.email = "Manish@gmail.com";

console.log(userOne.email);