// While Loops
/**
 * var rice = 2;
while (rice <= 65536) {
    console.log(rice)
    rice = rice * 2
}
 */
// Do While Loop

var allCones = Math.floor(Math.random() * 50) + 50;

console.log("I have " + allCones + " cones left to sell before I can go home")

do {
    var coneTransaction = Math.floor(Math.random() * 5) + 1;
    if (coneTransaction > allCones) {
        console.log("I cannot sell you " + coneTransaction + " I only have " + allCones + " left, sorry");
    } else {
        allCones -= coneTransaction;
    console.log(coneTransaction + " cones sold, I have " + allCones + " left to sell.");
    }
    if (allCones === 0) {
        console.log("I am out of cones, buh bye!")
    }
} while(allCones > 0);

