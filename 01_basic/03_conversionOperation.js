let score = "33"
let score_01 = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


let valueInNumber_01 = Number(score_01)
console.log(typeof valueInNumber_01);
console.log(valueInNumber_01);

// 33 => 33
// "33abc" => NaN
// "Manish" => NaN
// null => 0
// true => 1; false => 0
// undefined => NaN

let isLoggenIn = 1
let isLoggenIn_01 = ""
let isLoggenIn_02 = "Manish"

let booleanIsLoggedIn = Boolean(isLoggenIn)
let booleanIsLoggedIn_01 = Boolean(isLoggenIn_01)
let booleanIsLoggedIn_02 = Boolean(isLoggenIn_02)

console.log(booleanIsLoggedIn);
console.log(booleanIsLoggedIn_01);
console.log(booleanIsLoggedIn_02);


// 1 => true; 0=> false
// "" => false
// "Manish" => true

let point = 33
let strpoint = String(point)

console.log(strpoint);
console.log(typeof strpoint);





