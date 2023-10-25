const score = 400;
// console.log(score); // 400

const balance = new Number(100);
// console.log(balance); // [Number: 100] 

// console.log(balance.toString().length); // 3 
// console.log(balance.toFixed(2)); // 100.00

const anotherNumber = 123.8966;
// console.log(anotherNumber.toPrecision(4)); // 123.9

const otherNumber = 1000000;
// console.log(otherNumber.toLocaleString('en-IN')); // 10,00,000

// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++
// console.log(Math); // Object [Math] {} this plateform not given detailed value so we can see in browser 

// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.3)); //4.6=>5, 4.3=>4

// console.log(Math.ceil(4.2)); // 5 is only take upper value
// console.log(Math.floor(4.6)); // 4 is only take real value
// console.log(Math.min(1, 5, 6, 7, 8)); // 1
// console.log(Math.max(1, 5, 6, 7, 8)); // 8

// console.log(Math.random()); // this value varies only 0 to 1 (0.42283234170049355)
// console.log((Math.random()*10) + 1); // (6.699973152283471)
// console.log(Math.floor(Math.random()*10) + 1); // (1)

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
