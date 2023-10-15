// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        // console.log(`5 is best number `);
        
    }
    // console.log(i);
    
}



for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(`outer value of i ${i}`);
    for (let j = 0; j <= 10; j++) {
        const element = j;
        // console.log(`inner value of j ${j} and inner value of ${i}`);
        
    }
    
}

const myArray = ["ironman", "hulk", "black panther", "spiderman", "thor"];

// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];                                  // if i goes out of arry like if we give condition like i<= myArray.length
    // console.log(element);                                        // then it will give undefined not an error
    
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`5 is dectected`);
        break
    }

    // console.log(`value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`5 is dectected`);
        continue
    }

    console.log(`value of i is ${index}`);
    
}