 
const balance = 1000

if(balance < 500)
{
    console.log("less then 500");
}
else if(balance < 750)
{
    console.log("less then 750");
}
else if(balance < 900)
{
    console.log("less then 900");
}
else{
    console.log("less then 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(userLoggedIn && debitCard)
{
    console.log("allow to buy ");
}

if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("user logged in ");
}









