// for of loop

// ["", "", "", ""]

// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const iterator of arr) {
    // console.log(iterator);
    
}

const greeting = "Hello world!";
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`)
    
}

// maps
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

// console.log(map1); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

// console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

// console.log(map1.get('a'));
// Expected output: 97

// console.log(map1.size);
// Expected output: 3

map1.delete('b');

// console.log(map1.size);
// Expected output: 2

const map = new Map();

map.set('In', "India");
map.set('USA', "United Sate america");
map.set('Fr', "france");
// map.set('In', "India");

// console.log(map); // Map(3) 'In' => 'India','USA' => 'United Sate america','Fr' => 'france' }

// for (const key of map) {
//     console.log(key); // [ 'In', 'India' ] [ 'USA', 'United Sate america' ] [ 'USA', 'United Sate america' ]
// }

for (const [key, value] of map) {
    // console.log(key, ':-', value);      // In :- India  
    //                                 //  USA :- United Sate america
    //                                  // Fr :- france
    
}

// const myObj = {
//     'game1': "NFS",
//     'game2': "spiderman"

// }
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value); // TypeError: myObj is not iterable
// }

const myObj = {
    game1 : "NFS",
    game2 : "spiderman"

}
for (const [key, value] of myObj) {
    console.log(key, ':-', value); // TypeError: myObj is not iterable
}