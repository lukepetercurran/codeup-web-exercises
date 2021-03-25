"use strict";
// Immediately Invoked Function Expression (IFFE's)
(function () {
    console.log("Hello World.");

    console.log(parseInt("17dogs."));

// var whatIsTheWord = prompt("What is your favorite work appropriate word?");
//
// console.log(whatIsTheWord);

// Let's define a function
    function doTheThing(input) {
        var output = input + " was pulled into the function. Now it is this concatenated string. :)";
        return output;
    }

    console.log(doTheThing("Greggles"));

    function addStuff(x, y) {
        return x + y;
    }

    console.log(addStuff(17, 18));

// Let's make a "bad" function...

    function logToConsole(info) {
        return info + " is something important to keep in mind";

    }

    var needThisForLater = logToConsole("Bengal tigers are endangered");

    console.log(needThisForLater);

// In defense of console.logging during functions
    function addingToString(str) {
        var finalString = str + " is a string."
        // console.log(typeof finalString);
        finalString += " And if it wasn't originally a string, it sure is now!";
        // console.log(finalString);
        return finalString;
    }

    alert(addingToString("Antelope"));

// Global vs Local Variables


    var global = "Earth"
    var local = "Geoff"

    console.log(global);

    function getGlobalAndLogIt() {
        var local = "Neptune";
        console.log(global);
        console.log(local);
    }

    getGlobalAndLogIt();
    console.log(local);

// Another way to define functions
    var coolGuyFunction = function (string) {
        return string + ", but with sunglasses. B)";
    }

    console.log(coolGuyFunction("Skunk"));
})();

console.log(coolGuyFunction("David Stephens"));

