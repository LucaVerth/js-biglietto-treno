// Train ticket cost

/*
- Ask how many km the traveler will ride the train for
- Ask the traveler's age
- Apply a 20% discount if the age is below 18
- Apply a 40% discount if the age is above 65
- print the price based on how many km he will ride for and the discount
- output must be written with fully ($3.45) max 2 decimals
*/

const travelKm = prompt('Please enter how many km to ride for...');
const travelerAge = prompt('Please enter your age...');
const travelFee = 0.21


console.log(travelKm);
console.log(travelerAge);

var travelPrice = travelKm * travelFee;

console.log(new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(travelPrice));

var discount20 = parseFloat((travelPrice / 100)*20).toFixed(2);
var discount40 = parseFloat((travelPrice / 100)*40).toFixed(2);

if (travelerAge > 18 && travelerAge < 65) {
  console.log(travelPrice)  
} else if (travelerAge < 18) {
  console.log(parseFloat(travelPrice - discount20).toFixed(2))
} else {
  console.log(parseFloat(travelPrice - discount40).toFixed(2))
};
