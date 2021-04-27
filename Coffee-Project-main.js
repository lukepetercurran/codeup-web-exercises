"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}
// var addCoffee = document.getElementById("roast-add");
// addCoffee.addEventListener("click", function(){
//     alert("It works");
// })


function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = nameSelection.value;
    var roastCategory = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.name.toLowerCase()).includes(selectedRoast.toLowerCase()) && coffee.roast === roastCategory) {
            filteredCoffees.push(coffee);
        } else if (roastCategory === "all") {
            filteredCoffees.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}




var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#name-selection')
// <button type="button" onClick="GetSelectedValue()">Get Selected Value</button>


tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);
nameSelection.addEventListener('keyup', updateCoffees);




//Dom Events Lec

// document.querySelector("#roast-selection-by-style").addEventListener("change", function(event){
//     // console.log(event.target);
//     document.querySelector(".result").innerHTML =  ;
// });

// Mkyong find
// <select id="country">
//     <option value="None">-- Select --</option>
//     <option value="ID001">China</option>
//     <option value="ID002" selected>United State</option>
//     <option value="ID003">Malaysia</option>
// </select>
//
// <script>
//
//     function GetSelectedValue(){
//         var e = document.getElementById("country");
//         var result = e.options[e.selectedIndex].value;
//
//         document.getElementById("result").innerHTML = result;
// }
//
//     function GetSelectedText(){
//     var e = document.getElementById("country");
//     var result = e.options[e.selectedIndex].text;
//
//     document.getElementById("result").innerHTML = result;
// }
//
// </script>
//
// <br/>
// <br/>
// <button type="button" onClick="GetSelectedValue()">Get Selected Value</button>
//
// <button type="button" onClick="GetSelectedText()">Get Selected Text</button>
