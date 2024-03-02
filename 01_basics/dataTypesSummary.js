// Primitive
// these are call by value
// 7 types: String, Number, Boolean, null, undefined, Symbol,BigInt

const score = 110
const scoreValue  = 100.333

const isLoggedIn =  false
const outsideTemp = null
let userEmail;

const id =  Symbol('123')
const anotherId  = Symbol('123')

console.log(id === anotherId); // false

// const bigNumber = 54854102146541n


//Reference type(Non primitive)  .. memory me inka reference diya ja skta hai

// Array, Objects, Functions   // return type object

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Dheeraj",
    age: 22,
}

const myFuntion = function(){
    console.log("Hello World");
}