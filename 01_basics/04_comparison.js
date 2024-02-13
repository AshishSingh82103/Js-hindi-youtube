// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // flase
// console.log(2 != 1); // true

// console.log("2" > 1); // ture
// console.log("02" > 1); //true

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// console.log(undefined == 0); // false
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false

//=======>  === is not check only value it,s also check the data types
console.log("2" === 2); // flase

// =====================================================
// primitve(Stack), Heap(Non-primitve)
// primitve => String, number, null, undefiend, BigInt, symbol, boolean.
// Non-primitve(reference) => Array, function, object

const str = "Ashish";
const num = 123;
const outSideTemp = null;
const playGame = undefined;
const bigInt = 49253255325n;
const indication = Symbol('123');
const indication1 = Symbol('123');
const score1 = true;
console.log(indication == indication1); // false

// non-primitive(Refernce)
// -----------Array-------
 const arr = ["capitan", "number-9", "number-8"];


// ------------Function-----------------
const value1 = {
    name: "Ashish",
    id: "123",
    password: "ashish@12345"
}

// -----------Object------------
const myFunction = function () {
    console.log("Hello Number");
}

console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof outSideTemp); // object
console.log(typeof playGame); // undefined
console.log(typeof bigInt); // bigint
console.log(typeof indication); // symbol
console.log(typeof score1); // boolean




