// ---------------Object-----------------------
function multiplieBy5(num) {
    return num * 5;
}
// multiplieBy5(5)
multiplieBy5.power = 2;

console.log(multiplieBy5(5)); //25
console.log(multiplieBy5.power); //2
console.log(multiplieBy5.prototype); //{}

function createUser(userName, score) {
    this.userName = userName;
    this.score = score;
}

createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(`Price ${this.score}`)

}

const create1 = new createUser("web.API", 25);
const create2 =  createUser("request", 250);

create1.printMe();
// create2.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
