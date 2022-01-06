// * For the numbers 0 - 100, print out "I found a [ number ]. High five!" if the
//     * number is a multiple of five.
// *
// * Sample Output:
//     *   - I found a 5. High five!
// *   - I found a 10. High five!
// */

// for (let Num = 0; Num <= 100; Num++ ) {
//     if (Num % 5 == 0) {
//         console.log("i found a multiple of 5. high five!");
//     }  else {
//         console.log("i did not find a multiple of 5. Sadge")
//     }
// }



// for (let Num = 0; Num >= 100; Num++ ) {
//     if (Num % 5 == 0) {
//         console.log("i found a 5. high five!");
//     } else if (Num % 10 == 0)  {
//         console.log("i found a 10. high five!")
//     }
// }
//
// for (let i = 1; i >= 10; i++) {
//     for (let j = 11; j >= 20; j++) {
//         console.log(`i: ${i}  j: $ {j}`)
//     }

/*Using Nested loops, print the values inside the nested arrays*/

    // let nestedArrays = [
    //     ["a", "b", "c"],
    //     ["d", "e", "f"],
    //     ["g", "h", "i"]
    // ];
    // for (let i = 0; i <= nestedArrays.length; i++) {
    //     for (let j = 0; j <= nestedArrays[i].length; j++) {
    //             console.log(nestedArrays[i][j])
    //         }
    //     }

// Fizzbuzz es5
for (i = 1; i < 100; i++ ){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("Fizzbuzz");
    } else if ( i % 3 === 0){
        console.log("Fizz");
    } else if ( i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i)
    }
}
for (i =1; i < 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("Fizzbuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i)
    }
}

