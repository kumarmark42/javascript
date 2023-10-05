const accountId = 123456789  // const variable does not allow to change the value
let accountName = "Manish"   // new 
var accountCity = "Asansol"  // old 
/*
 prefer NOT to use 'var' keyword
 because of issue in block scope and functional scope.
*/
let accountState;
accountType = "private"   // we can write like that but NOT a good practice


console.log("before changes");  // used to print
console.table([accountId, accountName, accountCity, accountType, accountState]); 

// accountId = 122354  // not allowed
accountName = "Anish"
accountCity = "Dhanbad"
accountType = "private"
accountState = "West bengal"

console.log("after changes");
console.table([accountId, accountName, accountCity, accountType, accountState]);
