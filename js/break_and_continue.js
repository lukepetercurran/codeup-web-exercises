"use strict";
var oddNumber = 0;
console.log(oddNumber)

while (oddNumber !== "You're never gonna come up with this"){
    oddNumber = parseFloat(prompt("Gimme an odd number between 1 and 50"));
    if (oddNumber % 2 === 1 || (oddNumber > 0 && oddNumber < 50)) {break;}
}
// while (oddNumber % 2 !== 1 || !(oddNumber > 0 && oddNumber < 50)) {
//     oddNumber = parseFloat(prompt("Gimme an odd number between 1 and 50"));
//     if (oddNumber % 2 === 1 && (oddNumber > 0 && oddNumber < 50)){break;}
// }

for (var i = 1; i  < 50; i += 2){
    if (i === oddNumber) {
        console.log("Yikes, skipping " + oddNumber + "!");
        continue;
    }
    console.log(i);
}

