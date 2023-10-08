const score = 400
console.log(score);


const balance = new Number(1000)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const newNumber = 123.893
console.log(newNumber.toPrecision(1));
console.log(newNumber.toPrecision(2));
console.log(newNumber.toPrecision(3));
console.log(newNumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString());  // American standards
console.log(hundreds.toLocaleString('en-IN'));  // Indian standards

// ++++++++++++++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.8));

console.log(Math.min(4,2,3,8,6,9,7,5));
console.log(Math.max(5,23,6,9,7,1,5,3,65,5));

console.log(Math.random());  // gives value between 0-1

console.log(Math.random() * 10);
console.log((Math.random() * 10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min = 10
const max = 20

console.log(Math.floor((Math.random()*(max-min) + 1)+min));