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
// console.log(myCreateDate.toDateString()); // Mon Jan 23 2023(month satrt on 0 in java scripts)

let myCreateDate2 = new Date(2023, 0, 23, 5, 3);
// console.log(myCreateDate2.toLocaleString()); // 1/23/2023, 5:03:00 AM

let myCreateDate3 = new Date("2023-01-14");
// console.log(myCreateDate3.toLocaleString()); // 14/1/2023, 5:30:00 am

let myCreateDate4 = new Date("01-14-2023");
// console.log(myCreateDate4.toLocaleString()); // 14/1/2023, 12:00:00 am

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1698263939723
// console.log(myCreateDate4.getTime()); // 1673634600000

// console.log(Math.floor(Date.now()/1000)); // 1698263939 

let newDate = new Date();
console.log(newDate); // 2023-10-26T07:35:52.567Z
console.log(newDate.getMonth()); // 9
console.log(newDate.getDay()); // 4

// `${newDate.getDay()} and the time ${newDate.getMonth()}`

// in vs  get the property by use ctrl+space

newDate.toLocaleString('default', {
    weekday: "long"
})