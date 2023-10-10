
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





