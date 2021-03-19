"use strict";

var message = "Howdy y'all!";

// Originally was a variable set to a console log
// var whatIsThisThen = console.log(message + " Hope you are all having a mighty fine thursday");
var whatIsThisThen = message + " Hope you are all having a mighty fine thursday";

console.log(whatIsThisThen);

// back at 2:48!!! This is a Javascript comment, btw

/**
 *
 * I'm a block comment!!!
 * Fear my ability to be multiple lines long!
 *
 */

var favoriteCheese = prompt("What is your favorite cheese?");

console.log(favoriteCheese + " happens to be their favorite cheese. Huzzah!");

var typeOfPrompt = typeof prompt("Tell me something");

console.log(typeOfPrompt);

var num = parseFloat(prompt("Gimme a number..."));

console.log("User entered: " + num + ". That number plus 17 is: " + (num + 17) + ".")

var canIGoToToysRUs = confirm("Can I go to Toys 'R Us, pwease?");

console.log(canIGoToToysRUs);

var valueOfThis = alert("You're looking at a website!");

console.log(valueOfThis)

