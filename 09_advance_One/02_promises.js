// // console.log('ashish');
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
            reject('error something went wrong');
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

// promise fifth

const promiseFive = new promise(function(resolve, reject) {
    setTimeout(function(){
        let error = false;
        if(!error) {
            resolve({username: "java-script",
                     password: "123" })
        } else {
            reject('Error: Js went worng')
        }
    }, 1000)
})
async function consumePromiseFive({
    await promiseFive
})
    

