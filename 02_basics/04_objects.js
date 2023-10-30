// Objects singleton = constructor

// const tinderUser1 = new Object();
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "samy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser1); // {} => empty object
// console.log(tinderUser) // { id: '123abc', name: 'samy', isLoggedIn: false }


// nested
const regularuser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstname: "Ashish",
            lastName: "Singh"
        }
    }
}


// console.log(regularuser.fullName); // { userFullName: { firstname: 'Ashish', lastName: 'Singh' } }
// console.log(regularuser.fullName.userFullName); // { firstname: 'Ashish', lastName: 'Singh' }
// console.log(regularuser.fullName.userFullName.firstname); // Ashish

// optional chaining
// console.log(regularuser.fullName?.userFullName.firstname);

const obj1 = {
    1: "a",
    2: "b"
    
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1, obj2};
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj4 = Object.assign({}, obj1, obj2); 
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// spread operator
const obj = {...obj1, ...obj2};
// console.log(obj); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//  when data gives us value = > Array of objects
const users = [
    {
        id: 1,
        email: "singhashish82103@gmail.com"
    },
    {
        name: 'ashish',
        fullName: "Ashish-singh"
    },
    {
        id: 1,
        email: "singhashish82103@gmail.com"  
    }
]

users[1].email

console.log(tinderUser); // { id: '123abc', name: 'samy', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser)); // [ '123abc', 'samy', false ]

console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'samy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // ture
