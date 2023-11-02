// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

if(true) {
    let a = 10;
   const b = 20;
   var c = 30;
   d =40
   
   }
   
   // console.log(a); // a is not defiend
   // console.log(b); // b is not defiend
   // console.log(c); // 30
   // console.log(d); // 40
   
   // let & const=> block level scope which means that the vribles declraed inside{} cannot be accessed outside the block
   // var => global scope
   // inside function acess to thier parent function but not vice-versa
   
   function one() {
       const userName = "hitesh"
   
       function two() {
           const website = "youtube"
           // console.log(userName)
       }
       // console.log(website); //  1:give error => website is not defined
       two();
   }
   // one();
   
   if (true) {
       const username = "hitesh";
       if(username === "hitesh") {
           const website = "youtube"
           // console.log(username + website); // hiteshyoutube
       }
       // console.log(website); 1 error
   }
   // console.log(username); 2 error
   
   // +++++++++Interesting++++++++++++++++
   // function
   
   // console.log(addOne(5)); // 6
   function addOne(num) {
       return num + 1;
   }
   // addOne(5);
   
   // function but even said it experssion(like varible)
   console.log(addTwo(5));  //ReferenceError: Cannot access 'addTwo' before initialization
   const addTwo = function(num) {
       return num + 2;
   }
   // addTwo(5);