const userEmail = "singhashsi@872";

if(userEmail) {
    console.log("found"); // found
} else {
    console.log("not_found");
}

const userEmail1 = "";

if(userEmail1) {
    console.log("found");
} else {
    console.log("not_found"); // not_found
}

const userEmail2 = [];

if(userEmail2) {
    console.log("found"); // found
} else {
    console.log("not_found");
}

// -------------------Note--------------------
// falsy value 
//  false, 0, -0, BigInt 0n, "", null, undefined, NaN

// ------truthy value-----
// "0", 'false', " ", [], {}, function(){}

const userMail = [];
if(userMail.length === 0) {
    console.log("array is empty"); // array is empty
}

const empObj = {};
if (Object.keys(empObj).length === 0) {
    console.log("objects is empty"); // objects is empty
}

// Nullish coalescing operator(??): null. undefined

let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 15; // 15

val1 = null ?? 10 ?? 15 // 10

console.log(val1); 

// ternairy operator

// condition ? ture : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") :console.log("more than 80"); // more thna 80