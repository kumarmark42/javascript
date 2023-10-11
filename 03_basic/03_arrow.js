const user = {
    username: "Manish",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to websit`);
        console.log(this);
    }
}

// user.welcomeMessage()
// console.log(user.username);
// user.username = "sam"
// user.welcomeMessage()
// console.log(user.username);



// console.log(this);    // give empty {}


function learn(){
    let username = "MANISH"
    console.log(this);    //   give lot of information
    console.log(this.username);    // gives undefined
}

// const learn = function(){
//     let username = "MANISH"
//     console.log(this);    //   give lot of information
//     console.log(this.username);    // gives undefined

// }


// learn()



const chai = () => {
    let username = "MANISH"
    console.log(this);    // gives {}
}

chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }             
                   // basic arrow function explicit return


// const addTwo = (num1, num2) => (num1 + num2)
        //  implicit return

const addTwo = (num1, num2) => ({username: "Manish"})

console.log(addTwo(5, 3));