// if

// if (ture) {
//     // code execute n this scope
// }

// if (false) {
//     // code will not execute in this scope
// }

// const isUserLoggedIn =  true;

// if(isUserLoggedIn) {
//     console.log("run"); // run
// }

// <,  >, <=, >=, ==, !=, ===, !==

// if (2 == "2") {
//     console.log("execured");  // executed
// }

// if (2 === "2") {
//     console.log("executed"); // not executed
// }

const isUserLoggedIn = true;
const temperature = 40;

// if (temperature < 50) {
//     console.log("less than 50"); // less than 50
// }
// console.log("temprature is greater than 50"); // temprature is greater than 50

// if (temperature === 40) {
//     console.log("less than 50") // less than 50
// } else {
//     console.log("temperature is greater than 50")
// }

// if (temperature === 41) {
//     console.log("less than 50") 
// } else {
//     console.log("temperature is greater than 50") // temperature is greater than 50
// }

// const score = 200;

// if (score > 100) {
//     const power ="fly";
//     console.log(`User power; ${power}`)
// } else {
    
// }
// if we will choosse the value var then the code will run bcoz var is a global scope

// const balance = 1000;

// if(balance > 500) console.log("test") , console.log("test1"); //  test, test1 that was not a good practice

// const balance = 1000;

// if(balance < 500)  {
//     console.log("less than 500");

// } else if (balance < 750) {
//     console.log("less than 750");

// } else if(balance < 900) {
//     console.log("less than 900");

// } else {
//     console.log('less than 1200'); // less than 1200
// }

 const userloggedIn = true;
 const debitCard = true;

 if (userloggedIn && debitCard) {
    console.log("Allow to buy course");
 }
 const loggedInFromGoogle = false;
 const loggedInFromEmail = true;
 
 if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("user login");
 }