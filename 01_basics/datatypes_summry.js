// # Primitive Data-types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well. JavaScript supports object-oriented programming with object prototypes and classes.

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId); //  false

const bigNumber = 45463645287520857205n;



// # Reference (Non-primitive) return datatype is always called function
// 3 types : Array, Objects, Functions

// ----Array-----
const heroes = ["Shktiman", "nagraj", "iornman"];

// -----Objects-----
 let myObject ={
    name: "ashish",
    age: 27,
 }

 // -----Function(){}-------
 const myFunction = function(){
    console.log("Hello world")
 }

 console.log( typeof heroes); // object
 console.log( typeof myObject); // object
 console.log( typeof myFunction); // function = > function return is called object function

//  https://262.ecma-international.org/5.1/#sec-11.4.3
