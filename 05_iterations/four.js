// forin loop

// object
const myObject = {
    js : 'javascript',
    cpp : 'c++',
    py : 'python',
    Rb : 'ruby'
}

for (const key in myObject) {
//    console.log(key);
}

for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`);
}

// array
const arr = ['js', 'cpp', 'py', 'Rb', 'c']

for (const key in arr) {
    // console.log(key);
}

for (const key in arr) {
    console.log(`${key} :- ${arr[key]}`);
}






