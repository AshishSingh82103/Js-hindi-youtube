// console.log('ashish');
// response is in then() and error is the catch() and is better tutorial is in finally()
fetch('https://something.com').then().catch().finally()

// how to make promise is a object
// promise no. 1

const promiseOne = new Promise(function(resolve, reject){
    // Do an Async task
    //Data base calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is compelete'); // Async task is compelete
        // resolve connect with then after then will execute
        resolve();
    }, 1000);
    });
    
    promiseOne.then(function() {
        console.log("Promised consumed"); // Promised consumed
    })
    
    // other way to write the promise withou variable
    new Promise(function(resolve, reject) {
        setTimeout(function(){
            console.log("Async Task 2");
            resolve();
        }, 1000)
    }).then(function() {
        console.log("Async Task 2 is resolve")
    })
    

