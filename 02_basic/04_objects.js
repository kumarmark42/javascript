
const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "john"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularuser = {
    uses: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Manish",
            middleName: "Kumar"
        }
    }
}

console.log(regularuser.fullName.userFullName.firstName);  

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const target = {}
const obj3 = {obj1, obj2}  // object k ander object chala jata hai

console.log(obj3);

const objNew = Object.assign(target, obj1, obj2)

console.log(objNew);
console.log(target);
console.log(objNew === target);

const NewObj = {...obj1, ...obj2}  // mostaly we are gonna use
console.log(NewObj);

const objInArray = [
    {
        id: "abc123",
        name: "rohan"
    },
    {
        id: "abc258",
        name: "mohan"
    },
    {
        id: "abc456",
        name: "sohan"
    },
]

console.log(objInArray[1].id);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // gives true/false

const course = {
    courseName: "javaScript",
    price: 999,
    courseInstrutre: "Hitesh"
}

// console.log(course.courseInstrutre);

const {courseInstrutre: Instrutre} = course
console.log(Instrutre);
