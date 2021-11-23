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
// for(var i = 1; i < 10; i++) {
//     var counter = "";
//     for(var j = 0; j < i; j++) {
//         counter += i;
//     }
//     console.log(counter);
// }
//
// // David Wagnon's Method for Exercise 4
//
// for(var i = 1; i<10;i++){
//     for(var x = 0; x<i;x++){
//         console.log(i);
//     }
//     x=0;
// }
//
// // Javier's Method for Exercise 4
//
// for (var i = 1; i < 10; i++) {
//     var number = i;
// // console.log(stringNumber);
//     var count = 0;
//     var outputString = "";
//     while(count < number) {
//         outputString = outputString + number.toString();
//         // console.log("Time " + count + " through the loop " + stringNumber);
//         count = count + 1;
//     }
//     console.log(outputString);
// }

// Alternative Exercise 4
// Keeps crashing :( , establish breakout

// for(var i = 1; 1 <= 10; i++) {
//     console.log(String(i).repeat(i))
// }

// console.log("1")
// console.log("2" + "2")
// console.log("3" + "3" + "3")

// Exercise 5

for (var i = 100; i > 0; i = i - 5) {
    console.log(i);
}

var string = "";
for(var i = 0; i < 8; i++) {
    var word = prompt("let's make a sentence!");
    if (word === "curses"){
        console.log("This is a respectable program");
        // break; (to stop the code) || continue; (to stop, then continue)
    }
    var string = string + " " + word;
    console.log("Your sentence is: " + string);
}

