const name = "Ashish";
const repo = 50;

// console.log(name + repo + " value"); // Ashish50 value

// `` => backticks
// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repo}`); //Hello my name is Ashish and my repo count is 50 (this is good method)
const gameName = new String("hitesh-hc");

// console.log(gameName[0]); // h
// console.log(gameName.__proto__); // {}

// console.log(gameName.length); // 9
// console.log(gameName.toUpperCase()); // HITESH-HC
// console.log(gameName.charAt(1)); // i
// console.log(gameName.indexOf('t')); // 2
// console.log(gameName.indexOf('i')); // 1

const newString = gameName.substring(0, 4); // hite
// console.log(newString); // hite
const anotherString = gameName.slice(-8, 4);
// console.log(anotherString); // ite

const newStringOne = "  hitesh  ";
console.log(newStringOne); //  hitesh  //
console.log(newStringOne.trim()); // hitesh

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-')); // https://hitesh.com/hitesh-choudhary
console.log(url.includes('sundar')); // false

const gameName1 = new String('hitesh-hc-com');
console.log(gameName1.split('-')); // [ 'hitesh', 'hc', 'com' ]

