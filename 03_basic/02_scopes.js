var a = 300
let b = 100

if(true){
    let b = 25
    const c = 50          //  inside the {} is known as block scope 
    var a = 75
    
    console.log("INNER ", b);
}
                             //   out side the {} is known as global scopes
console.log(a);
console.log(b);
// console.log(c);


function one() {
    const username = "Manish"

    function two() {
        const website = "Github"
        console.log(username);
    }

    // console.log(website);    // will not excute because website is define in child scope

    two()
}


one()


if(true) {
    const username = "Manish"

    if(true) {
        const website = " powerBI"
        console.log(...username, ...website);
        console.log(typeof(website));
        console.log(username + website);
        console.log(typeof(true));

    }

    // console.log(website); 
}

// console.log(username);


// +++++++++++++++++++++++++++++++++++++++++ Intresting +++++++++++++++++++++++++++++++++++++++++++++++++


// addOne(5)                           // work fine because of hoisting

function addOne(num) {                         //   known as function
    return num + 1
}

addOne(5)



// addTwo(5)                      // gives error because of hoisting

const addTwo = function(num) {                  // it is also a function but somtime known as expression
    return num + 2
}

addTwo(5)