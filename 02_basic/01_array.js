// array

const myarray = [1,2,3,4,5,6]

console.log(myarray);

const heros = ["Shaktiman", "Irinman", "hulk"]
console.log(heros);

const myarray2 = new Array(1,2,3,4,5,6)
console.log(myarray2);
console.log(myarray2[3]);

// array Method

myarray2.push(12)  // add in last of the array
myarray2.push("Manish")
console.log(myarray2);
myarray2.pop()  // delete the last element of the array
console.log(myarray2);

myarray2.unshift(55)  // add in front of the array
console.log(myarray2);
myarray2.shift(0)  // delete the first element of the array
console.log(myarray2);

console.log(myarray2.includes(8));  // gives true/false based on the element is present or not
console.log(myarray2.indexOf(5));  // gives the index value of the element or if the element is not present the it gives -1

const newArray = myarray2.join()
console.log(myarray2);
console.log(newArray);
console.log(typeof newArray);

// slice and splice

const myn1 = myarray2;
console.log("A", myarray2);
console.log(myarray2.slice(1,3));  // not include the last index
console.log("B", myarray2);


console.log(myarray2.splice(1,3));  // remove value from the original array and includes both index and make his own array
console.log("C", myarray2);