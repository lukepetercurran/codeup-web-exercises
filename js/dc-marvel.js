
//
// var accessTheDOM = document.getElementById("dc");
// var showMe = accessTheDOM.innerHTML;
// alert(showMe)

var like = document.getElementById("like");
var dontLike =document.getElementById("dontLike");
var dc =document.getElementById("dc");
dc.innerHTML = dc.innerHTML + " Animated Universe";
var output = like.innerHTML + ' ' + dc.innerHTML;
// alert(output);

var marvel = document.getElementById("marvel");
marvel.setAttribute('class', 'hotpink')
marvel.innerHTML = marvel.innerHTML + ' Cinematic Universe';

dc.setAttribute('class', 'hotpink');

var hotPinks = document.getElementsByClassName('hotpink');
//returns a "Nodelist"
// hotPinks[0].style.color = 'rebeccapurple';
// hotPinks[1].style.color = 'green';
// hotPinks[1].style.fontFamily = 'sans-serif';

for (var i = 0; i < hotPinks.length; i++) {
    hotPinks[i].style.color='green';
    hotPinks[i].style.fontFamily='sans-serif';
}

//grabbing the content of a form input using JavaScript
var submitButton = document.getElementById("colorSubmission");
submitButton.onclick = function (){
    var colorInput = document.getElementById("colorPreference");
    var paragraphs = document.getElementsByTagName("p");
    colorPreference = colorInput.value;
    // alert(colorPreference)
    for (var i=0; i < paragraphs.length; i++){
        paragraphs[i].style.color = colorInput.value;
    }
colorInput.value = "";
}

//Hulk

// var theHulk = document.getElementById("theHulk")
// var hulkState = theHulk.getAttribute("data-state");
// var hulkStrength = theHulk.getAttribute("data-strength");
// var hulkIntelligence =theHulk.getAttribute("data-intelligence");
// alert("The Hulk is currently in " + hulkState + " state. His strength is " + hulkStrength + " and his intelligence is " + hulkIntelligence);

var transformButton = document.getElementById("transformHulk");
transformButton.onclick = function(){
    var hulkState = theHulk.getAttribute("data-state");
    if (hulkState === "The Hulk") {
        theHulk.setAttribute("data-state", "Bruce Banner");
    } else {
        theHulk.setAttribute("data-state", "The Hulk");
    }
    var hulkStrength = theHulk.getAttribute("data-strength");
    if (hulkStrength === "super") {
        theHulk.setAttribute("data-strength", "normal");
    } else {
        theHulk.setAttribute("data-strength", "super");
    }
    var hulkIntelligence = theHulk.getAttribute("data-intelligence");
    if (hulkIntelligence === "low") {
        theHulk.setAttribute("data-intelligence", "exceptional");
    } else {
        theHulk.setAttribute("data-intelligence", "low");
    }
    // var hulkNameElement = document.getElementById("theHulk");
    // var hulkName = hulkNameElement.innerHTML;
    // if(hulkStrength === "normal"){
    //     hulkNameElement.innerHTML = "Bruce Banner"
    // }
    var hulkNameElement = document.getElementById("theHulk");
    var output = hulkState + " is currently in " + hulkState + " state, His strength is " + hulkStrength + " and his intelligence is " + hulkIntelligence;
    if (hulkStrength === "super"){
        hulkNameElement.style.color = "green";
        hulkNameElement.innerHTML = output
    } else {
        hulkNameElement.style.color = "hotpink";
        hulkNameElement.innerHTML = output
    }
}

