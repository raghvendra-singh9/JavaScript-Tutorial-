let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

let firstName = 'Jonas';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_hello = 'JH';
let $function = 26;

let person = 'raghav';
let PI = 3.1415;

let myFirstJob = 'coder';
let myCurrentJob = 'Programmer';

let job1 = 'teacher';
let job2 = 'lawyer';

console.log(myCurrentJob);

/* ASSIGNMENT ----  1
        1.  Declare variables called country, continent and population and assign their values according to your own country (population in millions).
        2.  Log their values to the console.
*/

// let country = 'India';
// let continent = 'Asia';
// let population = 1417;

// console.log(country);
// console.log(continent);
// console.log(population);

// FINISH ASSIGNMENT 1

// DATA TYPES

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Raghav');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1998;
console.log(year);
console.log(typeof year);

console.log(typeof null);

/* ASSIGNMENT ----  2
    1. Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
    2. Log the types of isIsland, population, country and language to the console.
*/

// let isIsland = false;
let language;

// console.log(typeof isIsland);
// console.log(typeof language);

// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);

// FINISH ASSIGNMENT 2

// LET , VAR, CONST  {ASSIGNING THE VARIABLES}

let age = 30;
age = 31;

const birthYear = 1998;
// birthYear = 1999;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Shekhawat';
console.log(lastName);

/* ASSIGNMENT ----  3
    1. Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
    2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
    3. Try to change one of the changed variables now, and observe what happens.
*/

// language = 'Hindi';
// const country = 'India';
// const continent = 'Asia';
// let population = 1417;
// const isIsland = false;
// isIsland = true;

// FINISH ASSIGNMENT 3

// OPERATORS

//Math Operators
const now = 2037;
const ageRaghav = now - 1998;
const ageGaurav = now - 2002;
console.log(ageRaghav, ageGaurav);

console.log(ageRaghav * 2, ageRaghav / 10, 2 ** 3);
// 2**3 means 2 to the power of 3=2*2*2

const myFirstName = 'Raghvendra';
const myMiddleName = 'Singh';
const myLastName = 'Shekhawat';

console.log(myFirstName + ' ' + myMiddleName + ' ' + myLastName);

//Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// comparison Operators

console.log(ageRaghav > ageGaurav);
console.log(ageGaurav >= 18);

// Operator Precedence

console.log(now - 1998 > now - 2002);

let a, b;
a = b = 25 - 10 - 5; //a = b = 10, a = 10
console.log(a, b);

const averageAge = (ageRaghav + ageGaurav) / 2;
console.log(ageRaghav, ageGaurav, averageAge);

/* ASSIGNMENT ----  4
    1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
    2. Increase the population of your country by 1 and log the result to the console.
    3. Finland has a population of 6 million. Does your country have more people than Finland?
    4. The average population of a country is 33 million people. Does you country have less people than the average country?
    5. Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
*/
language = 'Hindi';
const country = 'India';
const continent = 'Asia';
const population = 14;
const countryPopulation = 1457072328;
let halfCountryPopulation = countryPopulation / 2;
halfCountryPopulation++;
console.log(halfCountryPopulation);

const finlandPopulation = 6000000000;
console.log(countryPopulation > finlandPopulation);

// const description =
//   country +
//   ' is in ' +
//   continent +
//   ', and its ' +
//   population +
//   ' million people speak ' +
//   language;

// console.log(description);

// FINISH ASSIGNMENT 4

// STRING AND TEMPLATE LITERALS

const herName = 'Kushi';
const herJob = 'Lawyer';
const herBirthYear = 1990;
const presentYear = 2040;

const kushi =
  "I'm " +
  herName +
  ', a ' +
  (presentYear - herBirthYear) +
  ' years old ' +
  herJob +
  '!';
console.log(kushi);

const kushiNew = `I'm ${herName}, a ${
  presentYear - herBirthYear
} years old ${herJob}!`;
console.log(kushiNew);

console.log(`Just a regular string.....`);

console.log('string with \n multiple \n lines');
console.log(`string
multiple 
lines`);

/* ASSIGNMENT ----  5
    1. Recreate the description variable from the last assignment, this time using the template literal syntax.
*/

const description = ` ${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);

// FINISH ASSIGNMENT 5

// IF - ELSE STATEMENTS

const herAge = 19;
const isOldEnough = herAge >= 18;

if (herAge >= 18) {
  console.log('She can start driving');
} else {
  console.log("She can't start driving");
}

const myBirthYear = 2012;
let century;
if (myBirthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

/* ASSIGNMENT ----  6
    1. If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).
    2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
*/

// FINISH ASSIGNMENT 6

// TYPE CONVERSION
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number('Raghvendra'));
console.log(typeof NaN);

// TYPE COERCION
console.log('I am ' + 27 + ' years old');
console.log('23 ' - '10' - 3);
console.log('23 ' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

/* ASSIGNMENT ----  7
    1. If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).
    2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
*/

// FINISH ASSIGNMENT 7

// TRUTHY AND FALSY VALUES
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Raghvendra'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
  console.log("Don't spend it all ;");
} else {
  console.log('You should get a job!');
}

const boolHeight = 123;
if (boolHeight) {
  console.log('YAY! height is defined');
} else {
  console.log('Height is defined');
}

// EQUALITY OPERATORS == & ===

const boolAge = 18;
if (boolAge === 18) console.log('You just became an adult (strict)');

if (boolAge == 18) console.log('You just became an adult(loose)');

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // '23' == 23
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else {
  console.log(`${favourite} is the coolest number`);
}

/* ASSIGNMENT ----  8
    1. If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).
    2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
*/

// FINISH ASSIGNMENT 8

// LOGICAL OPERATORS

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log('Raghvendra should drive');
} else {
  console.log('Raghvendra should not drive');
}

const isTired = false;

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Raghvendra should drive');
} else {
  console.log('Raghvendra should not drive');
}

/* ASSIGNMENT ----  9
    1. If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).
    2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
*/

// FINISH ASSIGNMENT 9

// SWITCH STATEMENT

const day = 'wednesday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'sunday':
  case 'saturday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a valid day');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day');
}

/* ASSIGNMENT ----  10
    1. If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).
    2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
*/

// FINISH ASSIGNMENT 10

// THE (CONDITIONAL) TERNARY OPERATOR

const raghavAge = 14;
raghavAge >= 18
  ? console.log('I like to play cricket')
  : console.log("I don't like to play cricket");
