// Resopnse is  then() and error is the catch() and is better tutorial is finally()
fetch('https://something.com').then().catch().finally()

// promise object
// promise no.1 
const promiseOne = new Promise(function(resolve, reject) {
    // Do as a async Task
    // Data base call, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete');
        // resolve connect after then wil execute
        resolve();  
    }, 1000);
});
promiseOne.then(function() {
    console.log('Promise consumed');
})

// second way
new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log('Async Task is complete');
        resolve();
    }, 1000)
})
.then(function() {
    console.log('Async task 2 is complete')
})

// third - part
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve({
            username: 'Ashish', 
            email: '123'
        })

    }, 1000);

})
promiseThree.then(function(user) {
    console.log(user);
})

const PromiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({
            Username: 'login@7867',
            Password: "Ashsish@82103 "
        })
    }, 1000)
})
PromiseFour.then(function(user1) {
    console.log(user1);
})

const PromiseFive = new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log('Async Two Tasl is complete')
        resolve();
    }, 1000)
})
PromiseFive.then(function() {
    console.log('Task two is completed');
})

new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log('my hover buttun')
    }, 1000)
}).then(function() {
    console.log('task is complete')
})

const promiseSix = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({
            username: 'keyword',
            api: "singhashish82103@gmail.com"
        })

    }, 1000)
})
promiseSix.then(function(user) {
    console.log(user);
})

// fourth Promise

const promiseSeven = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({
                userName:"Ashish",
                 password: "123"
            })
        } else {
            reject('Error got when code is not execute')
        }
    }, 1000);
})
promiseSeven.then(function(user3) {
    console.log(user3)
    return user.userName
})
.then(function(userName) {
    console.log(userName)
})
.catch(function(error) {
    console.log(error);
})
.finally(function() {
    console.log('Promise either wwill be excute or will be rejected')
})



