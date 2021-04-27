"use strict";
(function () {
//    The Document Object Model provides an Event Model (or interface) that allows you to
//    write code that responds to events that happen in within the browser

//    target.addEventListener("type", listener);

//    Click Event
    var moonEvent = function (){
        document.querySelector("#main-content").style.backgroundImage = "url(img/moon-surface.png)";
        // this = moonText object
        this.innerHTML = "Do I have to wear a mask on the moon?"
    }
    var moonText = document.querySelector("#moon-travel")

    moonText.addEventListener("click", moonEvent);

//    Long Way
    document.querySelector("#moon-travel").addEventListener("click", function (){
        document.querySelector("#main-content").style.backgroundImage = "url()"
    })


// Mouse Event

var goku = document.querySelector("#goku");
var gokuListener = function () {
    this.src = 'img/goku-mad.png';
    this.addEventListener('nouseout', function (){
        this.src = 'img/goku-normal.png';
    });
}

goku.addEventListener("mouseover", gokuListener);

// Removing an event listener

    var gokuChill = function() {
        goku.removeEventListener("mouseover", gokuListener);
    }

        document.querySelector(".goku-chill").addEventListener("click", gokuChill);

// Click Event

document.querySelector("#color-btn").addEventListener("click", function(){
    console.log()
    document.querySelector("body").style.color = document.getElementById("text-color").value;
});

// Change Event

document.querySelector("#travel-items").addEventListener("change", function(event){
    console.log(event.target);
    document.querySelector(".result").innerHTML = 'I agree that  ${event.target.value}  is important!';
});

// Key Event

    document.addEventListener("keyup", function(event){
        console.log(event);
        if (event.key === " ") {
            document.querySelector(".space-bar").style.display = "inline";
        }
    });

})();
