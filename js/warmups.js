// Warmup May 24, Fizzbuzz Exercise. Return "Fizz" if x is divisible by 3, "Buzz" if x is divisible by 5, "Fizzbuzz" if divisible by both 3 and 5, and x if divisible by neither 3 nor 5. Console Log Fizzbuzz 1-30

// (() => {
//     const fizzBuzz = numTil => {
//         for (let x = 1; x <= numTil; x++) {
//             if (x % 3 === 0 && x % 5 === 0) {
//                 console.log("FizzBuzz");
//             } else if (x % 3 === 0) {
//                 console.log("Fizz")
//             } else if (x % 5 === 0) {
//                 console.log("Buzz")
//             } else {
//                 console.log(x)
//             }
//         }
//     }
//     fizzBuzz(100);
// })();


// Warmup May 25, Write a function that returns the number 7

// const returnSeven = () => 7;

// Warmup May 26, Write a function in Javascript that takes in a number and returns the number passed multiplied by the number 5. If we pass anything other than a number into the function, the function should return the number 0.

// function fiveByFive(x){
//     if (x <= 0 || x > 0) {
//         return (x * 5)
//     } else {
//         return (0)
//     }
// }
//
// const multiplyByFive = num => typeof num === "number" ? num * 5 :0;
//
// console.log(multiplyByFive(5));
// console.log(multiplyByFive(-3.5));
// console.log(multiplyByFive(0));
// console.log(multiplyByFive("Sixteen"));
// console.log(multiplyByFive(true));


// I miss these warmups
// I still miss these warmups

const fizzbuzz = numTil => {
    for (let x = 1; x<= numTil; x++){
        if(x % 3 === 0 && x % 5 === 0){
            console.log("Fizzbuzz");
        } else if (x % 3 === 0){
            console.log("Fizz")
        } else if (x % 5 === 0){
            console.log("Buzz")
        } else {
            console.log(x);
        }
    }
}
fizzbuzz(100)

const fizzbuzzone = numTil => {
    for (let x = 1; x<= numTil; x++){
        if (x % 2 === 0 && x % 5 === 0){
            console.log("Fizzbuzz");
        } else if (x % 2 === 0){
            console.log("Fizz");
        } else if (x % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(x)
        }
    }
}
fizzbuzzone(100)

const fizzbuzztwo = numTil => {
    for (let x = 1; x<numTil; x++){
        if (x % 4 === 0 && x % 5 === 0){
            console.log("Fizzbuzz")
        } else if (x % 4 === 0){
            console.log("Fizz")
        } else if (x % 5 === 0){
            console.log("Buzz")
        } else {
            console.log(x)
        }
    }
}
fizzbuzztwo(100)

const fizzbuzzthree = numTil => {
    for(let x = 1; x < numTil; x++){
        if (x % 5 === 0 && x % 10 === 0){
            console.log("Fizzbuzz")
        } else if (x % 5 === 0){
            console.log("Fizz")
        } else if (x % 10 === 0){
            console.log("Buzz")
        } else {
            console.log(x)
        }
    }
}
fizzbuzzthree(100)

const fizzbuzzfour = numTil => {
    for (let x = 1; x < numTil; x++){
        if (x % 6 === 0 && x % 3 === 0){
            console.log("Fizzbuzz")
        } else if (x % 6 === 0){
            console.log("Fizz")
        } else if (x % 3 === 0){
            console.log("Buzz")
        } else {
            console.log(x)
        }
    }
}
fizzbuzzfour(100)

const fizzbuzzfive = numTil => {
    for (let x = 1; x <numTil; x++){
        if (x % 3 === 0 && x % 10 === 0){
            console.log("Fizzbuzz")
        } else if (x % 3 === 0){
            console.log("Fizz")
        } else if (x % 10 === 0){
            console.log("Buzz")
        } else {
            console.log(x)
        }
    }
}
fizzbuzzfive(100)




