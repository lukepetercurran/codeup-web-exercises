"use strict";

// ===== Exponentiation =====

// With ES6, we can now calculate exponents with a double asterisk operator instead of using the Math object.

// var oldWay = Math.pow(4, 2);
// console.log(oldWay)
//
// var newWay = 4**2;
// console.log(newWay)

// ====== var vs let vs const ======

// VAR
// variables declared with var are function-scoped. This means that if the variable is declared anywhere else besides a function using var, it will always exist in the global scope.

// Ex:

// for (var i = 0; i < 5; i++){ //within function
//     console.log(i);
// }
//
// i = "hello!"; //global
// console.log(i);
//
//
// if (i === "hello!"){
//     var bubbles = 'bububububububbles';
//     console.log(bubbles)
// }
// bubbles = 'pop!'
// console.log(bubbles)
//
// function test(){
//     var logMe = "Hello!"
//     bubbles = '*floating*';
//     return logMe;
// }

// console.log(test());
// console.log(logMe);

// CONST
// CONST is block-scoped. This means that the variable declared with const cannot be redeclared. or reassigned.

const num = 4;
console.log(num);
