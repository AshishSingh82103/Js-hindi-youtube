// for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(`outer loop value ${element}`);

    for (let j = 0; j <= 10; j++) {
        const element = j;
        // console.log(`inner lopp vale ${element} and inner lopp value ${i}`);
        // console.log(i + '*' + j + '=' + i * j);
        
    }
    
}

let myArr = ["flash", "batman", "superman"];
// console.log(myArr.length);
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
    
}

// break and continue
// for (let i = 1; i <= 20; i++) { 
//     const element = i;

//     if (element == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`value of i is ${i}`)
    
// }

for (let i = 1; i <= 20; i++) { 
    const element = i;
    
    if (element == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`)
    
}
