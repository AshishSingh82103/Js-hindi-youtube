//------Objects declared in two method =1. literals, 2. constructor consturctor is made only singleton object

// Singleton => object.create

// Object literals

const mysym = Symbol("key1");

const jsUser = {
    name: "Ashish",
    age: 18,
    // mysym: "mykey1", // wrong
    [mysym]: "mykey1", // right
    "full name": "Ashish-singh",
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// How to acces our objects
// console.log(jsUser.email); // hitesh@google.com  (this is good method but not best when ever object declared in string form it will not be working)
// console.log(jsUser["email"]); // hitesh@google.com
// console.log(jsUser["full name"]); //  Ashish-singh (we not get it this value in dot form)
// console.log(jsUser.mysym); // mykey1
// console.log( typeof jsUser.mysym); // string but we got the type of symbol
// console.log(jsUser[mysym]); // key1
// console.log(typeof jsUser[mysym]);

// how to changes the value
jsUser.email = "singhashishchatgpt@gmail.com";

// freez the value
// Object.freeze(jsUser)

jsUser.email = "singhashishmicrosoft@gmail.com";

// console.log(jsUser);

// function => is treated by first class citizens

jsUser.greeting = function() {
    console.log("Hello JS user")
}

jsUser.greetingTwo = function() {
    console.log(`Hello js user, ${this.name}`)
}

console.log(jsUser.greeting); // [Function (anonymous)]
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo()); // Hello js user, Ashish