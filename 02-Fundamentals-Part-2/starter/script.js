'use strict';
// STRICT MODE
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive');

// const interface = 'Audio';
// const private = 534;

// FUNCTIONS

function logger() {
  console.log('My name is Raghvendra');
}

logger(); // calling , running or invoking the function
logger();
logger();
console.log(logger()); // result undefined

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
