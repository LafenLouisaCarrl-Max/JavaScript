'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starter, mainCourse){
    return [this.starterMenu[starter], this.mainMenu[mainCourse]]
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
};


// Destructuring Arrays
const arr = [2, 4, 6]
let [x, y, z] = arr // it assigns each element in the array to each letter respectively
[x, y] = arr  // gets only the first two elements in the array 
([x, , z] = arr); // skips the second element

const [start, mainer] = restaurant.order(2, 0) // this destructures the 3rd and 1st elemets of the starterMenu and mainMenu respectively into start and mainer
console.log(start, mainer)
// Nested destructuring 
const ar = [2, 4, [1, 5]]
let [i, , [j, k]] = ar
console.log(i, j, k)


// I will be continuing this later!!
