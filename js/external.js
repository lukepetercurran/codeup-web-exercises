alert('Welcome to my Website!');

var favoriteColor = prompt("What is your favorite color?");

alert("Great " + favoriteColor + " is my favorite color too!");

// Master CopyPasta
// var favoriteCheese = prompt("What is your favorite cheese?");

// Bullet 1
var lMRentalInDays = prompt("How many days did you rent Little Mermaid?");
var bBRentalInDays = prompt("How many days did you rent Brother Bear?");
var hercRentalInDays = prompt("How many days did you rent Hercules?");
var rentalRate = prompt("How much are you charged per day for renting a movie?");
var totalDue = (lMRentalInDays * rentalRate) + (bBRentalInDays * rentalRate) + (hercRentalInDays * rentalRate)
alert(totalDue + " is your total for renting these movies");

//Bullet 2
var googleRate = prompt("How much does Google pay hourly?");
var amazonRate = prompt("How much does Amazon pay hourly?");
var fBRate = prompt("How much does Facebook pay hourly?");
var googleHours = prompt("How many hours did you work at Google?");
var amazonHours = prompt("How many hours did you work at Amazon?");
var fBHours = prompt("How many hours did you work at Facebook?");
var totalPay = (googleHours * googleRate) + (amazonHours * amazonRate) + (fBHours * fBRate);
alert(totalPay + " is your total pay from these companies");

// Bullet 3
var classSize = prompt("How many students can sign up for a class?");
var studentsSignedUp = prompt("How many students have signed up for this class?");
var classTime = prompt("What class time works for you?");
var classStartTimes = prompt("What class times are available?");
var haveClassAt = false;
var classFull = false;
var canRegister = !(haveClassAt || classFull);
false || true
alert(canRegister + "  you can sign up for this class.");

// Bullet 4
var offerValid = prompt("Is the offer valid for you?");
var boughtAtLeastTwo = prompt("Have you bought at least two items?");
var premiumMember = prompt("Are you a premium member?");
var canHasDiscount = (premiumMember || boughtAtLeastTwo) && (offerValid);
alert(canHasDiscount + " you are eligible for the discount");
