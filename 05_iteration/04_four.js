const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    // console.log(key); // we get only key js, cpp, rb, swift
}

// for (const key in myObject) {
//     console.log(myObject[key]); 
// }

for (const key in myObject) {
        // console.log(`${key} shortcut for ${myObject[key]}`); 
    }

const myArr = ["js", "rb", "py", "java", "cpp"];

for (const key in myArr) {
    // console.log(key); // e get only key 0 1 2 3 4
}

// for (const key in myArr) {
//     console.log(myArr[key]);
// }

for (const key in myArr) {
    // console.log(`${key} short cut for${myArr[key]}`);
}

const map = new Map();
map.set('In', "India");
map.set('USA', "United Sate america");
map.set('Fr', "france");
map.set('In', "India");

for (const key in map) {
    console.log(key); // not iterable
}
