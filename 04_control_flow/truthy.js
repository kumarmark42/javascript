
const userEmail = []

if(userEmail) {
    console.log("Is truthy  ");
}

// falsy
            //  false, 0, -0, null, NaN, undefined, "", BigInt 0n

// truthy
           // other than falsy all are truthy and some interisting truthy are
           // "0", 'false', " ", [], {}, function() {}  
           
           
if (userEmail.length === 0) {
    console.log("array is empty ");
}


const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty ");
}


// nullish coalescing operator (??) : null undefined

let val1 
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10

console.log(val1);

// terniary operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80  ? console.log("less than 80") : console.log("more than 80 ");;

