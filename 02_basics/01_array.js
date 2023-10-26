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
// myArr.unshift(9);
// console.log(myArr); // [9, 9, 1, 2, 3, 4, 5]

// remove first element in my arrr
// myArr.shift();
// console.log(myArr); // [ 9, 1, 2, 3, 4, 5 ]

// question and answer in my array
// console.log(myArr.includes(7)); // false
// console.log(myArr.indexOf(11)); // -1
// console.log(myArr.indexOf(9)); // 0

//Adds all the elements of an array into a string, separated by the specified separator string.
// const newArr = myArr.join();
// console.log(newArr); // 9,1,2,3,4,5
// console.log(typeof newArr); // String
// console.log(myArr); // [ 9, 1, 2, 3, 4, 5 ]

// slice, splice

// slice not be manipulate origanl array
console.log("A", myArr); // A [ 9, 1, 2, 3, 4, 5 ]
const nA1 = myArr.slice(1, 3);
console.log(nA1); // [ 1, 2 ]

// splice manipulate origanl array it remove index element of those who is given
console.log("B", myArr); // B [ 9, 1, 2, 3, 4, 5 ]
const nB1 = myArr.splice(1,3);
console.log("C", myArr); // C [ 9, 4, 5 ]
console.log(nB1); // [1, 2, 3]