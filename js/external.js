"use strict";

// Part 1
console.log("Hello from external Javascript!")

alert('Welcome to my Website!');

// Part 2
var favoriteColor = prompt("What is your favorite color?");

alert("Great, " + favoriteColor + " is my favorite color too!");

// Part 3

// Bullet 1
var lMRentalInDays = Math.ceil(parseFloat(prompt("How many days did you rent Little Mermaid?")));
var bBRentalInDays =  Math.ceil(parseFloat(prompt("How many days did you rent Brother Bear?")));
var hercRentalInDays =  Math.ceil(parseFloat(prompt("How many days did you rent Hercules?")));

var rentalRate =  Math.ceil(parseFloat(prompt("How much are you charged per day for renting a movie?")));

var totalDue = (lMRentalInDays * rentalRate) + (bBRentalInDays * rentalRate) + (hercRentalInDays * rentalRate)

alert("$ " + (totalDue.toFixed (2)) + " is your total for renting these movies");

//Bullet 2
var googleRate = parseFloat(prompt("How much does Google pay hourly?"));
var googleHours = parseFloat(prompt("How many hours did you work at Google?"));

var amazonRate = parseFloat(prompt("How much does Amazon pay hourly?"));
var amazonHours = parseFloat(prompt("How many hours did you work at Amazon?"));

var fBRate = parseFloat(prompt("How much does Facebook pay hourly?"));
var fBHours = parseFloat(prompt("How many hours did you work at Facebook?"));

alert("You made $ " + ((googleHours * googleRate) + (amazonHours * amazonRate) + (fBHours * fBRate)));

// Bullet 3
var classHasRoom = confirm("Is there room for this class?");
var noScheduleConflict = confirm("Does this class slot work for you?");

alert("You can register: " + (classHasRoom && noScheduleConflict));

// Bullet 4
var isOfferValid = prompt("Is the offer valid for you?");
var amountBought = parseFloat(prompt("Have you bought at least two items?"));
var isPremiumMember = prompt("Are you a premium member?");
alert("Customer qualifies for promo: " + (((isPremiumMember || amountBought >= 2) && isOfferValid) && amountBought >= 1) + ".")