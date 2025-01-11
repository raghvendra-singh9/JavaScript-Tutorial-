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

// FUNCTION DECLARATIONS  VS  EXPRESSIONS

//declaration
function calcAge1(birthYear) {
  //   const age = 2037 - birthYear;
  //   return age;
  // other than this we can also write it like

  return 2037 - birthYear;
}

const age1 = calcAge1(1991); // value of parameter is argument  so 1991 is argument and birthYear is parameter which is the place holder for argument
console.log(age1);

//expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// ARROW FUNCTION

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);

console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  //   retirement > 0 ? return retirement : return -1;
  if (retirement > 0) {
    console.log(`${firstName} retires in a ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1950, 'Mike'));

// ARRAYS

const friends = ['Shantanu', 'Vipin', 'Mayank'];
console.log(friends);

const y = new Array(1991, 1984, 2000, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const firstName = 'Raghvendra';
const raghav = [firstName, 'Singh', 2037 - 1998, 'teacher', friends];
console.log(raghav);

const calcAgeA = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const ageA = calcAgeA(years[0]);
const ageB = calcAgeA(years[1]);
const ageC = calcAgeA(years[years.length - 1]);

console.log(ageA, ageB, ageC);

const ages = [ageA, ageB, ageC];
console.log(ages);

//push method  ---  push is a function to add value at the end of an array
const newLength = friends.push('Jai');
console.log(friends);
console.log(newLength);

//unshift method ---  this method adds value to start of the array
friends.unshift('Raghvendra');
console.log(friends);

//Pop method ---   remove the last element of an array
const popped = friends.pop();
friends.pop();
console.log(popped);
console.log(friends);

//shift method  removes the first element

friends.shift();
console.log(friends);

console.log(friends.indexOf('hello')); //if element is not there then it gives -1
console.log(friends.indexOf('Vipin'));

// includes method ---  instead of returning index of  it returns true or false if the value is present in array or not

friends.push(23);
console.log(friends.includes('hello'));
console.log(friends.includes('Vipin'));
console.log(friends.includes('23')); //false because it is testing with strict equality and it doesnt do type coercion
console.log(friends.includes(23));

//OBJECTS

// in objects order of values doent matter when we retrieve
//object literal syntax
const jonas = {
  firstName: 'Raghvendra',
  lastName: 'Singh',
  birthYear: 1991,
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['M', 'P', 'S'],
  hasDriversLicense: false,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }, we can do this also

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },  we can do this also

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}- year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  },
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt(
  'What do you want to know about Raghvendra? Choose between firstName, lastName, age, job, and friends'
);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends'"
  );
}

jonas.location = 'Portugal';
jonas['twitter'] = '@raghvendra';
console.log(jonas);

//CHALLENGE
//"Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`
);

// OBJECT METHODS

console.log(jonas.calcAge());
console.log(jonas.calcAge());
console.log(jonas.calcAge());
console.log(jonas['calcAge'](1991));

console.log(jonas.age);

// CHALLENGE
// "Jonas is a 46-year old teacher. and he has a/no driver's license"

console.log(jonas.getSummary());

//LOOPS

for (let rep = 1; rep <= 11; rep++) {
  console.log(`Lifting Weights repetition ${rep}`);
}

// LOOPING ARRAY
const gaurav = [
  'Gaurav',
  'Singh',
  2037 - 1991,
  'Advocate',
  ['Golu', 'Kushi', 'Kannu'],
];
