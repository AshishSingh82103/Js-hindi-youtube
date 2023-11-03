// Immediately Invoked Function Expressions (IIFE) which function thoese imeditely exwecute
// sometimes globalscope create poolution we avoid global scope poolution we use the IIFE.
// function chai() {
//     console.log("DB CONNECTED"); // DB CONNECTED
// }
// chai();

//------(IIFE)-----
(function chai() {
    //named iife
        console.log(`DB CONNECTEd`)
    console.log(`DB CONNECTED`); // DB CONNECTED
}) ();

// 1:() => function defination, 2:() => execuation
// its give error because of we did not give semicolumn and this sitituion we end the line and give to semicolumn(;).
( () => {
    console.log(`DB CONNECTED`) // DB CONNECTED
})();

( (name) => {
    //  unnamed iffe
    console.log(`DB CONNECTED Two ${name}`) 
})('ashish');  // DB CONNECTED Two ashish