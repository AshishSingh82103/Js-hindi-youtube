// const coding = ["js", "ruby", "java", "python", "cpp"];


// for each does not return the value

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item; // undefined
// })

// console.log(values);  // undeifined



// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// when we use filter we got a callback function() and get a condtion and whi ch value satsify the condtion and the true then tey value will be retur

//  const newNums = myNums.filter( (num) => num > 4 );
//  console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]


// when we use scope then we will write retur keyword otherthan it will be only print balnk arr

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => {

//     return num > 4;
// });

// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

// or ----------
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = [];
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
        
    }
})

// console.log(newNums);


const books = [
    { titel: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 }, 

    { titel: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },

    { titel: 'Book Three', genre: 'History', publish: 1997, edition: 2007 },

    { titel: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },

    { titel: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },

    { titel: 'Book Six', genre: 'Fiction',  publish: 1987,  edition: 2010 },

    { titel: 'Book seven', genre: 'History', publish: 1986, edition: 1996 },

    { titel: 'Book Eight',  genre: 'Science',  publish: 2011,  edition: 2016 },

    { titel: 'Book Nine',genre: 'Non-Fiction',publish: 1981, edition: 1989 },

];

// const userBooks = books.filter( (bk) => bk.genre === 'History')
// console.log(userBooks);


// const userBooks =  books.filter( (bk) => bk.publish >= 1995);
// console.log(userBooks);

const userBooks =  books.filter( (bk) => {
     return bk.publish >= 1995 && bk.genre === 'History';
});
console.log(userBooks);

