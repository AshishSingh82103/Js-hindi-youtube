let score = 33;
// console.log(typeof score); // number
// or
// console.log(typeof(score)); // number

//***************Conversion*****************

let score1 = "33abc";
let valueInNumber = Number(score1);
// console.log( typeof valueInNumber) // number
// console.log(valueInNumber); // NaN

let score2 = null;
let valueInNumber1 = Number(score2);
// console.log( typeof valueInNumber1) // number
// console.log(valueInNumber1); // 0

let score3 = undefined;
let valueInNumber2 = Number(score3);
// console.log( typeof valueInNumber2) // number
// console.log(valueInNumber2); // NaN(not an number)

let score4 = true;
let valueInNumber3 = Number(score4);
// console.log( typeof valueInNumber3) // number
// console.log(valueInNumber3); // 1

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean (isLoggedIn);
// console.log(booleanIsLoggedIn); // ture

let isLoggedIn1 = "";
let booleanIsLoggedIn1 = Boolean (isLoggedIn1);
// console.log(booleanIsLoggedIn1); // false

let isLoggedIn2 = 1;
let booleanIsLoggedIn2 = Boolean (isLoggedIn2);
// console.log(booleanIsLoggedIn2); // true

// "" => false
// "Ashish" => true

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber); // 33
// console.log(typeof stringNumber); // string

// *********************Operations**************************
let value = 3;
let negValue = -value;
// console.log(negValue) // -3

// console.log(2 + 2); // 4
// console.log(2 - 2); // 0
// console.log(2 * 2); // 4
// console.log(2 ** 3); // 8
// console.log(2 / 3); //  0.666666666(devider)
// console.log(8 % 2); //0(reminder)

let str1 = "hello";
let str2 = " ashish";
let str3 = str1 + str2;
// console.log(str3); // hello ashish

// console.log("1" + 2);  // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log((3 + 4) * 5 % 3); // 2

// console.log(true); // true
// console.log(+true); // 1
// console.log(true+); // got error
console.log(+"") // 0
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
 let gameCounter = 100;
 gameCounter++;
 console.log(gameCounter); // 101

 // ---------prefix and post fix- -------------------

 let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// x:4, y:3

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// a:4, b:4

