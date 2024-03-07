// -------------Object-literal--------------------
const user = {
    username: "Ashish",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.loginCount);
// console.log(user.getUserDetails());
// console.log(this); //{}

// ------------------Consturctor function--------------
// const promiseOne = new Promise();
// const date = new Date();

function User(username, logincount, isLoggedIn) {
    this.username = username;
    this.loginCount = logincount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`)
    }

    return this;
}
const userOne =  new User("ashish", 12, true);
const userTwo =  new User("javascript", 11, false);
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor); // [Function: User]

//------------- JavaScript Demo: Expressions - instanceof------------------

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true
