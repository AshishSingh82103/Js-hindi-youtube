// Array

const myArr = [9, 1, 2, 3, 4, 5];
const myHeroes = ["ashish", "anish", "sumit"];
const myArr1 = new Array(1, 2, 3, 4);
// console.log(myArr[0]); // 9

// Array methods

// add value in array
// myArr.push(6);
// console.log(myArr); // [9, 1, 2, 3, 4, 5, 6 ]

// remove last value in myarr
// myArr1.pop();
// console.log(myArr1); // [ 1, 2, 3 ];

// add value at the first place in my arr(this was not really good method)
myArr.unshift(9);
// console.log(myArr); // [9, 9, 1, 2, 3, 4, 5]

// remove first element in my arrr
myArr.shift();
// console.log(myArr); // [ 9, 1, 2, 3, 4, 5 ]

// question and answer in my array
console.log(myArr.includes(7)); // false
console.log(myArr.indexOf(11)); // -1