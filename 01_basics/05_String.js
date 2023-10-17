const name = "Ashish";
const repo = 50;

// console.log(name + repo + " value"); // Ashish50 value

// `` => backticks
console.log(`Hello my name is ${name} and my repo count is ${repo}`); //Hello my name is Ashish and my repo count is 50 (this is good method)

const gameName = new String("hitesh-hc");

// console.log(gameName[0]); // h
// console.log(gameName.__proto__); // {}

// console.log(gameName.length); // 8
// console.log(gameName.toUpperCase()); // HITESHHC
// console.log(gameName.charAt(1)); // i
console.log(gameName.indexOf('t')); // 2