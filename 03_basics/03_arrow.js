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