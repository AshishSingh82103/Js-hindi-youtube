// Dates


let myDates = new Date();
// console.log(myDates); // 2023-10-25T08:06:36.114Z
// console.log(myDates.toString()); // Wed Oct 25 2023 08:08:05 GMT+0000 (Coordinated Universal Time)
// console.log(myDates.toISOString()); // 2023-10-25T08:08:59.039Z
// console.log(myDates.toJSON()); // 2023-10-25T08:08:59.039Z
// console.log(myDates.toLocaleDateString()); // 10/25/2023
// console.log(myDates.toLocaleTimeString()); // 8:08:59 AM
// console.log(myDates.toDateString()); // Wed Oct 25 2023
// console.log(myDates.toLocaleString()); // 10/25/2023, 8:11:13 AM
// console.log(typeof myDates); // Object

let myCreateDate = new Date(2023, 0, 23);
console.log(myCreateDate.toDateString()); // Mon Jan 23 2023(month satrt on 0 in java scripts)

let mycreateDate2 = new Date(2023, 0, 23, 5, 3);
console.log(mycreateDate2.toLocaleString()); // 1/23/2023, 5:03:00 AM