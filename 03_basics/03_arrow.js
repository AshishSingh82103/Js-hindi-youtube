// current context => this. it is prefer to current context
const user = {
    userName: "hitesh",
    price: 999,
     welcomeMessage: function() {
        console.log(`${this.userName}, welcome to the website`);
        console.log(this);
     }
}
// user.welcomeMessage(); // hitesh, welcome to the website
// user.userName = "sam";
// user.welcomeMessage(); // sam, welcome to the website
// console.log(this); // {} in  node plate-form but other browser showing results


// function chai() {
//    // console.log(this);
//    let userName = "hitesh";
//    console.log(this.userName); // udefined
// }
// chai();

// const chai = function() {
//    let userName = "hitesh";
//    console.log(this.userName); // undefined

// }

// chai();

// ----------------------Arrow function-----------------
const chai = () => {
   let username = "hitesh";
   // console.log(this.username); // undefined
   console.log(this);
}
chai();

// const addTwo = (num1, num2) => {
//    return num1 + num2;

// }

// const addTwo = (num1, num2) => num1 + num2;

// or------- using this method in react
const addTwo = (num1, num2) => (num1 + num2);

console.log(addTwo(3, 4)); // 7

const objectReturn = (num1, num2) => ({username:"hitesh"});
console.log(objectReturn(3, 4)); // { username: 'hitesh' }