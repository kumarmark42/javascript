const name= "Manish"
const repoCount = 6

console.log(name + repoCount);

console.log(`My name is ${name} and my repository count is ${repoCount}`);

const gameName = new String("Manish-rk-mk-56")

console.log(typeof name);
console.log(typeof gameName);

console.log(gameName[2]);
console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName);

console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-6, 4);
console.log(anotherString);

const newString1 = "   Hello  "
console.log(newString1);
console.log(newString1.trim());

let url = "https://potential-potato%206qx947w6r542r4w7.github.dev/";
console.log(url);
console.log(url.replace('%20', '-'))

console.log(url.includes('manish'))
console.log(url.includes('potential'))

console.log(gameName.split('-'));
console.log(gameName.split());