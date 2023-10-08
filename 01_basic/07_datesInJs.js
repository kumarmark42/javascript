// dates

let myDate = new Date()
console.log(myDate);
console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());

let myCreatedDate1 = new Date(2023, 0, 15)
console.log(myCreatedDate1.toDateString());

let myCreatedDate2 = new Date(2023, 0, 26, 5, 3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-15")
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("01-15-2023")
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());
console.log(Math.floor(myTimeStamp/1000));

let myNewDate = new Date()
console.log(myNewDate);
console.log(myNewDate.getMonth()+1);
console.log(myNewDate.getDay());

// `${myNewDate.getDay()} and the time is ...`

myNewDate.toLocaleString('default',{
    weekday: "long",
    
})