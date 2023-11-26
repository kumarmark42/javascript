// for of

// array
const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num);
}

// string
const greeting = "Hello world!"

for (const greet of greeting) {
    // console.log(`Each character is ${greet}`);
}

// map
// it store data in key value pair
// it store data in order 
// it store only unique data
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

