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
const travelFee = 0.21;

document.getElementById('kilometers').innerHTML = 'Number of km: ' + travelKm;
document.getElementById('age').innerHTML = 'Age: ' + travelerAge;

let travelPrice = travelKm * travelFee;
let normalPrice = 'Non eligible for discount!'
let discount20 = parseFloat((travelPrice / 100)*20).toFixed(2);
let discount40 = parseFloat((travelPrice / 100)*40).toFixed(2);

let finalPrice = ''
if (travelerAge > 18 && travelerAge < 65) {
  finalPrice = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR'}).format(parseFloat(travelPrice.toFixed(2)));
  document.getElementById('discount').innerHTML = normalPrice; 
} else if (travelerAge < 18) {
  finalPrice = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR'}).format(parseFloat(travelPrice - discount20).toFixed(2));
  document.getElementById('discount').innerHTML = discount20;
} else {
  finalPrice = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR'}).format(parseFloat(travelPrice - discount40).toFixed(2));
  document.getElementById('discount').innerHTML = discount40;
};

console.log(finalPrice);

document.getElementById('Document').innerHTML = 'Your Ticket cost is: ' + finalPrice; 