// singleton
// object.creat



const mysym = Symbol("key1")


// object literal
const user = {
    name: "Manish",
    "full name": "Manish Kumar",
    email: "manish@google.com",
    [mysym]: "mykey1",
    mobile: 1234567890,
    age: 18,
    married: false,
    location: "assam",
    lastLoginDays: ["monday", "satirday"]
}

console.log(user.email);
console.log(user["email"]);  // best way to wtite.

// console.log(user.age(full name)); //not gonna work
console.log(user["full name"]);  // always work

console.log(user[mysym]);
console.log(typeof user[mysym]);

console.log(user);

user["email"] = "manish@chatgpt.com"  // it will gonna overwrite the value
console.log(user);

// Object.freeze(user)  // lock the values , we can't change further
user["email"] = "manish@microsoft.com"  // this will not gonna work now because we freeze the object
console.log(user);

user.greeting = function(){
    console.log("Hello JS user");
}

console.log(user.greeting);
console.log(user.greeting());

user.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());