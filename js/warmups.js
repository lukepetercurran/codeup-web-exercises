// Fizzbuzz Exercise. Return "Fizz" if x is divisible by 3, "Buzz" if x is divisible by 5, "Fizzbuzz" if divisible by both 3 and 5, and x if divisible by neither 3 nor 5. Console Log Fizzbuzz 1-30

(() => {
    const fizzBuzz = numTil => {
        for (let x = 1; x <= numTil; x++) {
            if (x % 3 === 0 && x % 5 === 0) {
                console.log("FizzBuzz");
            } else if (x % 3 === 0) {
                console.log("Fizz")
            } else if (x % 5 === 0) {
                console.log("Buzz")
            } else {
                console.log(x)
            }
        }
    }
    fizzBuzz(100);
})();



// for (i = 1; i < 31; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log("Fizzbuzz")
//     } else {
//         if (i % 3 === 0) {
//             console.log("Fizz")
//         } else {
//             if (i % 5 === 0) {
//                 console.log("Buzz")
//             }
//             else {
//                 if (i % 3 !==0 && i % 5 !== 0) {
//                     console.log(i)
//                 } else {
//                     if (i % 3 === 0 && i % 5 === 0)
//                         console.log("Fizzbuzz")
//                 }



