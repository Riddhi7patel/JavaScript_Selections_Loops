console.log("Hello World!\n==========\n");

// Exercise 1 Section

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
    console.log(i);
}
}

// Exercise 2 Section
for (let i = 1; i <= 100; i++) {
    console.log(i);

    if (i % 3 == 0 && i % 5 == 0) {
     console.log("FIZZBUZZ");
    } else {
        if (i % 3 == 0) {
         console.log("FIZZ");
        } else if (i % 5 == 0) {
         console.log("BUZZ")
        }
     }
}
// Exercise 3 Section

 i = 1;

while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (i % 3 == 0) {
            console.log("FIZZ");
    } else if (i % 5 == 0) {
            console.log("BUZZ") 
    }
i++;
}

i = 1;

do {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (i % 3 == 0) {
            console.log("FIZZ");
    } else if (i % 5 == 0) {
            console.log("BUZZ") 
    }
    i++;
} while (i <= 100);

// Exercise 4 section

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let x =0; i <= n; x++) {
    if (x == value) {
        console.log("found Value!");
        break;
    } else if (x == n) {

console.log("did not find value");
    } 
}

// Exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 1000

for (let i = start; i <= end; i++) {
    if(i % fizzDivisor == 0 && i % buzzDivisor == 0){
    console.log(i, "FIZZBUZZ");
} else if (i % fizzDivisor == 0) {
    console.log(i,"FIZZ");
} else if(i % buzzDivisor == 0) {
    console.log(i,"BUZZ");
}
}