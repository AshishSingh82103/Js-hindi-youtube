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
    console.log("objects is empty");
}

// Nullish coalescing operator(??)