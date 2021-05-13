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

// const num = 4;
// console.log(num);
// // num = 6; // <big no no.
// console.log(num)
//
// const name = 'Luke';
// // const name = 'Jay'; // <No, you cant do that.
// console.log(name) //What happens? an Error.
//
// // Block-scope
// var number = 5;
//
// if(number === 6){
//     const cardNumber = 1234123412341234;
// }
//
// const concat = 'concat'
// console.log(concat + 3)
// console.log(concat)

// LET
// The let keyword lets you define variable that are block-scope. As wit hvariables delcared with const, the variables with let cannot be redeclared.

// Redeclaration
// let name = 'Luke';
// let name = 'Javier';

 // Reassignment
// let name = 'Luke';
// name = 'Javier';
// console.log(name)

// function foo(n){
//     if (n == 6){
//         let num = 2;
//     }
//     console.log(num)
// }
//
// foo(6); //throws an error because our let variable is within our if statement scope.

// for (var i = 0; i < 3; i++){
//     console.log(i)
// }
// console.log('i outside of the loop', i);

// for (let i = 0; i < 3; i++){
//     console.log(i)
// }
// console.log('i outside of the loop', i);
// this code will not loop because i is a constant, and will not iterate. < Scoped within the loop

// ===== TEMPLATE STRINGS =====

// Template Strings allow for interpolation in strings. Variables and expressions can be read in template strings. Template Strings use back ticks to recognize variables and expressions.

// let name = 'Luke';
// console.log(`My name is ${name}`);
// console.log('My name is ' + name);
//
// console.log(`My name is ${name.toUpperCase() + ' Curran'} in all caps!`);

// let nationalParks = ['Grand Canyon National Park', 'Banff National Park', 'Joshua Tree National Park'];
//
// let parksList = `<ul>
//     <li>${nationalParks[0]}</li>
//     <li>${nationalParks[1]}</li>
//     <li>${nationalParks[2]}</li>
// </ul>`
//
// document.write(parksList);

// ===== for ...of loop =====

// //regular for loop
// for (let i = 0; i < nationalParks.length; i++){
//     console.log(nationalParks[i]);
// }
//
// //forEach loop
// nationalParks.forEach(function(park, index){
//     console.log(index)
//     console.log(park);
//     console.log(park[index]);
// });

// NEW ES6 For .. of Loop

// for(variable of iterable/collection){
//     statement
// }

// for(let park of nationalParks){
//     console.log(park)
// }

// let listItems = document.getElementsByTagName('li');
// console.log(listItems)
//
// for(let listItem of listItems){  //<Works with const as well
//     listItem.innerHTML += ' is an awesome park!';
// }


// ===== ARROW FUNCTIONS =====

// function test(){
//     return 'Hello from the test function!';
// }
//
// console.log(test());
//
// var test2 = function(){
//     return 'Hello from test2 function!'
// }

// console.log(test2())

//ES6 Way

// const test3 = () => 'Hello from test3 function!'
// console.log(test3())
//
// // one parameter does not need parenthesis
// const sayHello = name => {
//     var nameInCaps = name.toUpperCase();
//     return nameInCaps
// }

//multiple parameters will need to be in parenthesis
// const sayHello = (firstName, lastName) => {
//     let fullName = firstName.toUpperCase() + lastName.toUpperCase();
//     return fullName;
// }

// console.log(sayHello('Luke', ' Curran'))

//using an anonymous function expression
// nationalParks.forEach(park => {
//     let capsParks = park.toUpperCase();
//     console.log(capsParks)
// });

// ===== Default Function Parameter Values =====

// ES5 Syntax

// function add(num1, num2) {
//     if (num1 === undefined) {
//         num1 = 2;
//     }
//     if(num2 === undefined){
//         num2 = 2;
//     }
//     return num1 + num2;
// }

// console.log(add())
// console.log(add(5))
// console.log(add(5, 5));

// ===== Object Property Variable Assignment (shorthand) =====

// var name = 'Loopy Trail';
// var distance = 4.6
// var difficulty = 'moderate';
// var isPaved = true
//
// var trail = {
//     name: name,
//     distance: distance,
//     difficulty: difficulty,
//     isPaved: isPaved
// }
// console.log(trail);

// ES6 Better Way

let name = 'Loopy Trail';
let distance =4.6
var difficulty = 'moderate';
var isPaved = true

let trail = {
    name,
    distance,
    difficulty,
    isPaved
};
console.log(trail);

// ===== Object Destructuring =====

// ES5 Way

// let nameOfTrail = trail.name;
// let distanceOfLoopTrail = trail.distance;
// console.log(nameOfTrail);
// console.log(distanceOfLoopTrail);

// ES6 Way

let myObject = {
    movieName: 'The Incredibles',
    length: '1hr 43min'
}

let {movieName, length} = myObject;

console.log(movieName, length);

//ES5 function for object destructuring

function describeTrail(trailObj){
    var name = trailObj.name;
    var distance= trailObj.distance;

    return name + " " + "is " + distance + "mi long";
}

console.log(describeTrail(trail));

let describeTrail = trailObj => {
    let {name, distance} = trailObj;
    return name + " " + "is " + distance + "mi long";
};
console.log(describeTrail(trail))