// How to represent function basics
// function sayMyName() {
//     console.log("A");
//     console.log("s");
//     console.log("h");
//     console.log("i");
//     console.log("s");
//     console.log("h");
// }
// // sayMyName();

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);

// }
// // addTwoNumbers(3, 4); // 7 number1 and number2 are parameters and 3 and 4 are arguments.

// const result = addTwoNumbers(3, 5);
// console.log(result); // undefined

function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result;
 }

const result = addTwoNumbers(3, 5);
// console.log("result:", result); // result: 8

// function loginUserMessage(username) { 
//     if(username === undefined) {
//         console.log('Please enter a username');
//         return; //  Because do anything after return is not execute 
//     }
//     return `${username} just logged in`;

// }
// console.log(loginUserMessage("ashish")); // ashish just logged in
// console.log(loginUserMessage("")); // just logged in
// console.log(loginUserMessage()); // undefined just logged in

function loginUserMessage(username = "sam") {
if(!username === undefined) {
    console.log('Please enter a username');
    return;
}
return `${username} just logged in`;

}
// console.log(loginUserMessage()); // sam just logged in

// e-kart website 

function calculateCartPrice(num1) {
return num1;
}
// console.log(calculateCartPrice(200)); // 200
console.log(calculateCartPrice(200, 100, 400)); // 200

// rest-opertor ...

function calculateCartPrice1(...num1) {
return num1;

}
console.log(calculateCartPrice1(200, 100, 400)); // [ 200, 100, 400 ]

function calculateCartPrice2(val1, val2, ...num1) {
return num1;
}
console.log(calculateCartPrice2(200, 100, 400, 300, 700)); // [ 400, 300, 700 ]

const user = {
username: "hitesh",
price: 199
}
function handelObject(anyObject) {
console.log(`user name is ${anyObject.username} and price object is ${anyObject.price}`)

}

// handelObject(user); // user name is hitesh and price object is 199

// we pass the direct object

handelObject(
{
    username: "ashish-singh",
    price: 201
}
)
//  array in  function

const newArr = [200, 400, 100, 600];

function returnSecondValue(getArr){
return getArr[0]

}
console.log(returnSecondValue(newArr)); // 200
console.log(returnSecondValue([800, 400, 100, 600])); // 800
