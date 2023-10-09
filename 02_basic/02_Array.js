const marvel_heros = ["Ironman", "thor", "hulk"]
const dc_heros = ["Superman", "flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)  // "concat operator" it has limitation that it can only concat two array
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // "spread operator" it has no limitation of two array, we can use as much we want
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [4, 6, [8, 6, 6]], 2, 9]
console.log(another_array);

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Mainsh"));
console.log(Array.from("Manish"));

console.log(Array.from({name: "Manish"}));  // gives empty array --> we have define whom we use to make an array keys or values.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



