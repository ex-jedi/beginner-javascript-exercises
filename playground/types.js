/* eslint-disable */
const age = 100;
const name = 'Mark';

console.log(typeof age);
console.log(typeof name);

// If you do maths with non numbers you get concatenation. 'The plus sign is loaded!!'
const uhOh = 1 + "1"
console.log('UH OH -', typeof(uhOh));

console.log(Math.round(20.5)); // Rounds up or down
console.log(Math.round(20.3)); // Rounds up or down
console.log(Math.floor(20.5)); // Rounds down to nearest whole number
console.log(Math.ceil(20.2)); // Rounds up to nearest whole number
console.log(Math.random()); // random

// Dividing 20 sweets between 3 kids
const sweets = 20;
const kids = 3;
const eachKidGets = Math.floor(sweets / kids); // Rounds down to nearest whole number
console.log(`Each kid gets ${eachKidGets} sweets`);
// What about the ones left over?
const dadGets = sweets % kids; // Modulo operator gives number left over after division
console.log(`Dad gets ${dadGets} sweets`);