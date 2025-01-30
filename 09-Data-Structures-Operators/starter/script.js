'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekday = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHour = {
  [weekday[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  //es6 enhanced object literals to write methods
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // openingHour: openingHour,

  // es6 enhanced object literals
  openingHour,
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Array destructuring

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching Variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//Object Destructuring

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables

let A = 111;
let B = 999;
const obj = { A: 23, B: 7, C: 14 };

({ A, B } = obj);

console.log(A, B);

//nested objects

const {
  fri: { open: o, close: C },
} = restaurant.openingHours;
console.log(o, C);

restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole,21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'via del sole,21',
  starterIndex: 1,
});

//SPREAD oPERATOR

const Arr = [7, 8, 9];
const badNewArr = [1, 2, Arr[0], Arr[1], Arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...Arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays or more

const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menus);

// iterables are : arrays, strings, maps, sets . NOT objects

const str = 'raghvendra';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Singh`)

//real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// spread operator on object

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Raghav';
console.log(restaurant);
console.log(restaurantCopy);

// REST PATTERN

// 1.  Destructuring

const arra = [1, 2, ...[3, 4]]; // SPREAD, because on right side of =
console.log(arra);
//REST because on the left side of =
const [d, e, ...others] = [1, 2, 3, 4, 5];
console.log(d, e, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//rest pattern for objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const X = [23, 5, 7];
add(...X);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// Short Circuiting (|| and &&)

console.log('----- OR -----');

console.log(3 || 'raghav');
console.log('' || 'raghav');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// // console.log(restaurant);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

//  if we put 0 in placre of 23

//Nullish operator
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// console.log(restaurant);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//SOLUTION
//NULLISH COALESCING OPERATOR
//NULLISH : null and undefined (not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log('----- AND -----');

console.log(0 && 'raghav');
console.log(7 && 'raghav');

console.log('Hello' && 23 && null && 'raghav');

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//new Logical assignment operators (introduced in es2021)

const rest1 = {
  Name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  Name: 'La Piazza',
  owner: 'Gaurav',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// //OR ASSIGNMENT OPERTAOR
// //above statements can written like this using new assigning operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//NULLISH ASSIGNMENT OPERATOR (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// //AND ASSIGNMENT OPERATOR
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);

// LOOPING ARRAYS ( ---  FOR OF LOOP ------)

const myMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (let i = 0; i < myMenu.length; i++) {
  console.log(myMenu[i]);
}

for (const item of myMenu) console.log(item);

for (const item of myMenu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of myMenu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//OPTIONAL CHAINING
