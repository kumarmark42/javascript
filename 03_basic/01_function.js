
function sayMyName() {
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumber(number1, number2) {     // here number1 and number2 are known as parameter
    console.log(number1 + number2);
}

addTwoNumber(5, 6)             // here 5 and 6 are known as arguments



function addTwoNumber2(number1, number2) {     
    let result = number1 + number2
    return result
}

let res = addTwoNumber2(8, 6)
console.log("result", res);

function LoggedInMessage(username)
{

    if(username === undefined)
    {
        console.log(`Please enter a username`);
        return
    }
    return `${username} just logged in`
}

console.log(LoggedInMessage());  //  gives undefined

console.log(LoggedInMessage("manish"));


function calculateCartPrice(...num) {
    return num
}

console.log(calculateCartPrice(200, 525, 600, 552));

function calculateCartPrice1(val1, val2, ...num) {
    return num
}

console.log(calculateCartPrice1(200, 525, 600, 552));   // 200 stored in val1 and 525 stored on val2 and rest goes in num


const userDetail = {
    userName: "Manish",
    price: 999
}

function handelObject(anyObject) {
    console.log(`username is ${anyObject.userName} and the price is ${anyObject.price}`);
}

// handelObject(userDetail)

handelObject({
    userName: "Sam",
    price: 555
})


const myArray = [220, 552, 856, 335, 223]

function handelArray(anyArray) {
    return anyArray[2]
}

// console.log(handelArray(myArray));

console.log(handelArray([458, 668, 256, 456]));