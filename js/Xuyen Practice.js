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



for (let Num = 0; Num >= 100; Num++ ) {
    if (Num % 5 == 0) {
        console.log("i found a 5. high five!");
    } else if (Num % 10 == 0)  {
        console.log("i found a 10. high five!")
    }
}