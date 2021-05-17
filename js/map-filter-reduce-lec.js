// Array Iteration Methods

// ===== .forEach() =====
let output = "";
let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

// prices.forEach(function (item, index){
//     // console.log(item);
//     output = output + "<p>" + item + " is at index " + index + "</p>";
//     $("#output").html(output);
// });

// prices.forEach(function(price, index){
//     let tax = (price * 0.0825).toFixed(2);
//     let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
//     output = output + "<p>Item number " + (index + 1) + ". Price: $" + price + ". Tax: $" + tax + ". Total: $" + total + "</p>";
//     $("#output").html(output);
// });

// prices.forEach(function(price, index){
//     let tax = (price * 0.0825).toFixed(2);
//     let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
//     output = output + `<p>Item number ${index + 1}. Price: $${price}. Tax: $$tax. Total: $${total}</p>`;
//     $("#output").html(output);
// });

// ===== .map() =====

// let pricesAfterTax = [];
//
// pricesAfterTax = prices.map(function(price){
//    let tax = (price * 0.0825).toFixed(2);
//    let total = (parseFloat(price) +  parseFloat(tax)).toFixed(2);
//    return parseFloat(total);
// });
//
// pricesAfterTax.forEach(function(item){
//    output = output + "<p>" + item + "</p>";
//    $("#output").html(output);
// });

// let things = ["book", "pencil", "marker", "eraser"];
// let pluralThings = things.map(function(thing){
//    thing = thing + 's';
//    if (index === 0){
//       output = "<p>You must bring the following items:</p>";
//    }
//    output = output + "<p>" + thing + "</p>";
//    $("#output").html(output);
//    return thing;
// });
//
var affordablesWithTax = prices.filter(function(price){
   return price < 10;
}).map(function(price){
   let tax = (price * 0.0825).toFixed(2);
   let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
   return parseFloat(total);
});

affordablesWithTax.forEach(function(itemPrice){
   output = output + "<p>" + itemPrice + "</p>";
   $("#output").html(output)
});

// ===== Reduce =====

// reduce takes an accumulator parameter
let totalCost = affordablesWithTax.reduce(function(total, itemPrice, index){
   console.log(`the index is: ${index}, the total is: ${total}, the item price is: ${itemPrice}`);
   return total + itemPrice
});
console.log(totalCost)

//we pass an array parameter into the reduce methods function
let averagePrice = affordablesWithTax.reduce(function(total, itemPrice, index, array){
   // on each iteration, we add the itemPrice to the total
   total = total + itemPrice;
   // if its our last iteration, we take our total that we just calculated
   if (index === array.length -1){
      return total/array.length;
      // every other iteration through the array, we just pass it the total
   } else {
      return total;
   }
});
console.log(averagePrice.toFixed(2));

totalCost = prices.reduce(function(total, price, index){
   console.log(`the index is: ${index}, the total is: ${total.toFixed(2)}, the item price is ${price}`);
   return total + price;
}, 158.76);

console.log(totalCost.toFixed(2));

