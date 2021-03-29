// "use strict";

// ????

// for (var i = 1; i <= 10; i++);
//     var mult = i * num
//     console.log(num * i =  result)
// var number = 7;
//

// Exercise 2

// console.log(number + " * 1 = " + number);
// console.log(number + " * 2 = " + number * 2);
// console.log(number + " * 3 = " + number * 3);
//
// for(var multiplier = 1; multiplier <=10; multiplier++) {
//     console.log(number + " * " + multiplier + " = " + number * multiplier);
// }
// function showMultiplicationTable(number) {
//     for (var multiplier = 1; multiplier <= 10; multiplier++) {
//         console.log(number + " * " + multiplier + " = " + number * multiplier);
//     }
// }
// showMultiplicationTable(7)
// showMultiplicationTable(56)

// for(var i = 0; i <= 9; i++) {
//     var randomNum = Math.floor(Math.random() * 181) + 20;
//     if (randomNum % 2 === 0) {
//         console.log(randomNum + " is even");
//     } else {
//         console.log(randomNum + " is odd");
//     }
// }
// }

// Exercise 3

// function randomIntFromInterval(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(randomIntFromInterval(20,200))
//
// var random, evenOddString;
// for (var i = 0; i < 10; i++){
//     random = randomIntFromInterval(20, 200);
//     evenOddString = (random % 2 === 0) ? 'even' : 'odd';
//     console.log(random + ' is ' + evenOddString);
// }

// Exercise 4
for(var i = 1; i < 10; i++) {
    var counter = "";
    for(var j = 0; j < i; j++) {
        counter += i;
    }
    console.log(counter);
}


// console.log("1")
// console.log("2" + "2")
// console.log("3" + "3" + "3")