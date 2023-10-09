let score = 33;
//console.log(typeof score); //number
//or
//console.log(typeof(score)); //number

//-------Conversion-------------------
let score1 = "33abc";
let valueInNumber = Number(score1);
//console.log( typeof valueInNumber) //number
//console.log(valueInNumber); //NaN

let score2 = null;
let valueInNumber1 = Number(score2);
//console.log( typeof valueInNumber1) //number
//console.log(valueInNumber1); //0

let score3 = undefined;
let valueInNumber2 = Number(score3);
//console.log( typeof valueInNumber2) //number
//console.log(valueInNumber2); //NaN(not an number)

let score4 = true;
let valueInNumber3 = Number(score4);
//console.log( typeof valueInNumber3) //number
//console.log(valueInNumber3); //1

//"33" => 33
//"33abc" => NaN
// true => 1
//false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean (isLoggedIn);
//console.log(booleanIsLoggedIn); //ture

let isLoggedIn1 = "";
let booleanIsLoggedIn1 = Boolean (isLoggedIn1);
//console.log(booleanIsLoggedIn1); //false

let isLoggedIn2 = 1;
let booleanIsLoggedIn2 = Boolean (isLoggedIn2);
//console.log(booleanIsLoggedIn2); //true

//"" => false
//"Ashish" => true

let someNumber = 33;
let stringNumber = String(someNumber);
//console.log(stringNumber); //33
//console.log(typeof stringNumber); //string

