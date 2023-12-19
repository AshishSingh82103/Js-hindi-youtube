// console.log('ashish');
// response is in then() and error is the catch() and is better tutorial is in finally()
fetch('https://something.com').then().catch().finally()

// how to make promise is a object
// promise no. 1

const promiseOne = new Promise(function(resolve, reject){
    // Do an Async task
    //Data base calls, cryptography, network
    setTimeout(function() {
        // console.log('Async task is compelete'); // Async task is compelete
        // resolve connect with then after then will execute
        resolve();
    }, 1000);
    });
    
    promiseOne.then(function() {
        // console.log("Promised consumed"); // Promised consumed
    })
    
    // other way to write the promise withou variable => second promise
    new Promise(function(resolve, reject) {
        setTimeout(function(){
            // console.log("Async Task 2");
            resolve();
        }, 1000)
    }).then(function() {
        // console.log("Async Task 2 is resolve")
    })


// third promise = >  how to get the value

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({userName:"chai", email: "chai@example.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

// fourth promise
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = false;
        if(!error) {
            resolve({username:"Ashish", password: "123"})
        } else {
            reject('Error: something went wrong');
        }

    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) =>{
    console.log(username);

})
.catch(function(error){
    console.log(error);
})
.finally(() => {
    console.log("the promise either resolved or rejected");
})

// promise No five
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username: "java-script", password: "123"})
        } else {
            reject('Error: js went worng')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error) 
    }

}
consumePromiseFive()

// try catch method  syntax to extarct data fro Application programming language
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //response .jason take time convert so we do await for jason
        const data =  await response.json();
        console.log(data);
        // console.log(response) it will work but format is not suitable
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()