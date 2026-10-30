'use strict'; // it does not permit certain actions and is able to identify and point out bugs 
// it should always be placed at the top of the script file.

// Functions. it is a piece of code that can be reused over again
// They can also recieve data and return data
// Below is a funcion that accepts two parameters, oranges and apples and returns a text saying what quantity of each the juice should contain
function fruitProcessor(oranges, apples){
    console.log(oranges, apples)
    const juice = `Juice with ${oranges} oranges and ${apples} apples`
    return juice
}

// calling, invoking or nunning the function is the process of using the function created as so
// first i will store the function in a variable because i want it to return the statement
const Juicer = fruitProcessor(3, 7)
// now i will log the variable to the console to see the return value 
console.log(Juicer)

// Types of functions
// Declarative functions: This is the type of function where it is given a name during declation and can be called before declartion
let currentAge = ageCalculator(2006)
console.log(currentAge)// The function is called before declarion and still functions
function ageCalculator(birthYear){
    return (2026 - birthYear)
} // The function is given a name during declarion (ageCalculator)
currentAge = ageCalculator(2007)
console.log(currentAge) 

// Expressions functions: This type of function is declared nameless and stored in a variable and cannot be called before declaration
const myAge = function(yearBirth){
    return (2026 - yearBirth)
}
currentAge = myAge(2009)
console.log(currentAge)

// Arrow Functions: This type of functions dont use the 'function' key word. They use arrows instead and are asiigned to a variable.
// They are very short expecially if containing just one parameter

const calcAge = age => 2026 - age
console.log(calcAge(1998))

// Functions can also be called inside other functions, for example using an arrow function 
// Here I called calcAge function inside my untilRetirement function, to chech how much time i have until retirement.
const untilRetirement = age => 65 - calcAge(2007)
console.log(untilRetirement())


