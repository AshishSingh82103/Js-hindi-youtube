const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

//marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes[3][1]); // flash

//  const all_heroes = marvel_heroes.concat(dc_heroes);

// console.log(all_heroes); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// best method to cobmbine the array in java scripts(spread opertor)
const allNew_heroes = [...marvel_heroes, ...dc_heroes];
console.log(allNew_heroes); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_Array = another_Array.flat(Infinity);
console.log(real_another_Array);  // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Ashish")); // false
console.log(Array.from("Ashish")); // [ 'A', 's', 'h', 'i', 's', 'h' ]
console.log(Array.from({name: "Ashish"})); // [] = > empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
