// Train ticket cost

/*
- Ask how many km the traveler will ride the train for
- Ask the traveler's age
- Apply a 20% discount if the age is below 18
- Apply a 40% discount if the age is above 65
- print the price based on how many km he will ride for and the discount
- output must be written with fully ($3.45) max 2 decimals
*/

const travelKm = parseInt(prompt('Please enter how many km to ride for...'));
const travelerAge = parseInt(prompt('Please enter your age...'));
const travelFee = 0.21;

document.getElementById('kilometers').innerHTML = 'Number of km: ' + travelKm;
document.getElementById('age').innerHTML = 'Age: ' + travelerAge;

let validData = true;
let errorMsg = '';

if (travelerAge < 1 || travelerAge > 120) {
  validData = false;
  errorMsg = 'Age input not valid, please insert correct Age'
}
if (isNaN(travelerAge)) {
  validData = false;
  errorMsg = "Age must be a number"
}
if (isNaN(travelKm)) {
  validData = false;
  errorMsg = 'Km must be a number'
}
if (travelKm <= 0) {
  validData = false;
  errorMsg = 'Km can\'t be zero'
}

if (validData) {
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

} else{
  document.getElementById('control').innerHTML = errorMsg;
}
