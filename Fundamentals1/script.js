let js = 'amazing';
if (js === 'amazing') alert('JS is fun!');
console.log(65 + 6 + 7);

// A value is the smallest unit of information that can be used in java script
// for example 'jonas', 45.
// they are usually stored in a variable.

// naming conventions, it could either be camel casing
let myFirstName = 'Lafen';

// or use under score to separate the words
let my_First_Name = 'Lafen';

// if it is a constant, make sure it is in capital letters
let PI = 3.14;

// never begin naming a variable with a number and always ensure that variables are self descriptives


// ## DATA TYPES: There are 7 data types, namely
// 1. Numbers: Used for integers and decimals (90, 0.9)
console.log(typeof 90);
// 2. String: sequence of characters ('Hello', 'b'). should always be in quotes
console.log(typeof "Hello");
// 3. Boolean: Logical type that can only be true or false.
console.log(typeof true);
// 4. Undefined: A variable with an empty value i.e. let children;
// 5. Null: an empty value
// 6. Symbol: a value that is unique and cannot be changed.
// 7. BigInt: Larger integers than the Numbers can hold.

// In javascript, it is not neccessary to manually change the data type of a value as per other programming languages. (Dynamic typing)
// This is because it is the value that has a data type and not the variable, so it automatically determines the type for a value.


// Re-asigning variables
let myName = "Louisa";
console.log(myName);

// to re-assign, mak sure not to include the 'let' key word again. incase you want to change the value of a particular variable.
myName = 67;
console.log(myName)

// when checking for the data type of null, js returns that it is an object. This is a js bug and is not fixed due to legacy reasons.


// LET, CONST, VAR
// 'let' is used for variables that are intented to be reassigned, or mutated.
let dateOfBirth = 2007;
console.log(dateOfBirth)
dateOfBirth = 2006;
console.log(dateOfBirth)

// 'const' is used when declaring variables that are not supposed to change. 
// variables declared with const cannot be reassigned. It is best practice to use const when writing code, except you intend to change it.
// Variables declared with const cannot be undefined. There must be a starting value.

const Name = 'Carrl-max';

// var can do the same operations as let but differs in some ways as it was the first mode in js.

// Operations
// +, -, /, *
// ** means to the power
// +=5 means increment by 5
// -=5 means decrement by 5
// ++ increment
// -- decrement
// comparative operators <, >, <=, >=, ==, ===

// EXERCISE

const massMark = 78;
const heightMark = 1.69;


const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark/(heightMark ** 2);
const BMIJohn = massJohn/(heightJohn ** 2);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
