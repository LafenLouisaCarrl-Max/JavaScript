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


// Exercise

/* Write your code below. Good luck! 🙂 */

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3 
const scoreDolphins = calcAverage(44, 23, 71)
const scoreKoalas = calcAverage(65, 54, 49)

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= (2 * avgKoalas) ){
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`)
    }else if (avgKoalas >= (2* avgDolphins)){
        console.log(`Koala wins ${avgKoalas} vs ${avgDolphins}`)
    }else if (avgDolphins === avgKoalas) {
        console.log(`Both teams win ${avgDolphins} vs ${avgKoalas}`)
    }else{
        console.log(`No team wins`)
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas))

// ARRAYS 
// They are a type of data structure that serve as a contaner for storing data of same data type
const friends = ['Noel', 'Praise', 'Betty', 'Veri']
// They are indexed from 0 so the place value of the first element is 0
console.log(friends[0]) // Prints Noel
console.log(friends.length) // prints the total number of friends in the array
console.log(friends[friends.length - 1]) // prints the last element in the array

// Methods in arrays
//push: used to add elements into an array.
console.log(friends.push('Will'))
//unshift: adds elemets at the begining of the array, that is, at index 0
console.log(friends.unshift('Tati'))
//pop: removes an element from the array and returns the element
console.log(friends.pop('will'))
//shift: removes the first element from the array
//indexOf: checks the index of an elemet 
//includes: checks if an array contains an element and returns a boolean

// EXERCISE
function calcTip(bill){
    let tip;
    if(bill >= 50 && bill <= 300){
        tip = (15/100)*bill;
    } else{
        tip = (20/100)*bill;
    }
    
    return tip;
}
// console.log(calcTip(100));
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ];
console.log(totals);

// OBJECTS
// It is another data structure where instead of elements being indexed, they are given names and exist as key value paires
const Louisa = {
    firstName : 'Lafen',
    lastName : 'Mbimenyuy',
    age : 2026 - 2007,
    Friends : ['Noel', 'Praise', 'Betty', 'Veri'],
    occupation : 'student',
    minutes : 60,
    hasDriversLicense : true,

    // calcHour : function(minutes){
    //     return minutes/60
    // }


    // In order to use the minutes in this fuction, we can make use of the 'this' key word

    // calcHour : function(){ 
    //     const hour = this.minutes/ 60; return hour
    // }


    // if we want to make the hours a new element in this object we just add the 'this' keyword to the hour i.e this.hour = this.minutes / 60

    calcHour : function(){ 
        this.hour = this.minutes/ 60
        return this.hour
    },
    // we can now access it out of the object like Louisa.hour 

    getSummary : function(){
        return (`${this.firstName} is a ${this.hour} hour old ${this.occupation} and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license. `) 
    }
}

// How to retrieve using the dot or bracket notation
// Dot Notation
console.log(Louisa.Friends[0]) // outputs Noel because friends is an array so i will need an index to get a particular element out of it
console.log(Louisa.age) // prints my age

// Bracket Notation
console.log(Louisa['firstName']) // outputs Lafen

// Bracket notations accept expressions but dot does not
// Exercise 
console.log(`Louisa has ${Louisa.Friends.length} friends and her best friend is ${Louisa.Friends[0]}`)

// Object Methods
// any function attached to an object is a method. for example the calcHour function can now be used as a method

console.log(Louisa.getSummary())

// EXERCISE 
const mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    
    calcBMI : function(){
        this.bmi = this.mass/ (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
    
    calcBMI : function(){
        this.bmi = this.mass/ (this.height * this.height);
        return this.bmi;
    }
}

if (mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`)
}else{
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`)
}





