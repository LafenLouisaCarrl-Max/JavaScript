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
let birthYear = 2007;
console.log(birthYear)
birthYear = 2006;
console.log(birthYear)

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

// TEMPLATE LITERALS
// They make it easy to concatenate strings together more naturally. Instead of having

const firstName = "Lafen"
const yearOfBirth = 2007
const currentYear = 2026
const job = 'student'
const Louisa = "I'm " + firstName + " a " + (currentYear - yearOfBirth) + "year old " + job // It is important to use the double quotes when using single quotes inside text.
console.log(Louisa)

// We could use a template literal (use backticks, $, and {})
const louisaNew = `I'm ${firstName}, a ${currentYear - yearOfBirth}year old ${job}`
console.log(louisaNew)
// Also its easier using backticks because then you dont have to worry about the type of quotes to use and how to insert variables.
// backticks are also useful for multiple line strings as seen bellow
// instead of having...
console.log("multiple \n  line \n strings")
// we could have...
console.log(`multiple
    line
    strings`)

// CONTROL STRUCTURES
// IF and IF/ ELSE STATEMENTS
// they are conditional statements and function just as they sound. 
// variables declared inside the if statement cannot be printed outside the if statement.
// for example, checking the century one was born in

const yearBirth = 2012
let century // declaring an undefined variable using let, because i plan to reassign it
if (yearBirth < 2000){
    century = 20
}
else{
    century = 21
}
console.log(century)

// Data type Conversion and Coercion
// Data type conversion is when we manually convert from one data tyoe to another.
const inputYear = "1990"
console.log(Number(inputYear) + 18) // we use the 'Number' method to convert to a number. 
console.log(typeof(inputYear)) //It does not change the variable completely, it just does the change during the mathematical operation
// converting a string to a number will return 'Not a Number' (NaN). NaN has a datatype of 'Number'.

// Data type coercion is when JS autmatically converts from one type to another behind the scenes.
const inputText = "I am " + 19 + " years old"
console.log(inputText, "(" ,typeof(inputText), ")") // It shows that inputText is a string although it has the number 19 which is not.
// the '-' sign converts strings that are numbers to actual numbers that can be manipulated mathematically
// the '+' sign converts actual numbers to strings.
const n = "2" + "7" + 8 // prints '278' as a string
console.log(n - 100) // will return 178. Because it has converted the result of n from a string to a number and performed subtraction on it
// There can only be 3 conversions, i.e to String, Number and Boolean

// FALSY and TRUTHY VALUES
// Falsy values are values that are not false but will be if tried to be converted to boolean.
// there are only 5 of them, i.e, 0, undefined, null, NaN and ''
// every other value is a truthy value, for example

const money = 0
if(money){
    console.log("Don't spend it all")
}
else{
    console.log("Get a job")
} // data type coercion occurs and converts 0 to false hence the else statement will be printed. It will be same for the other falsy values.


// EQUALITY OPERATORS == and ===
// == checks for exactness and does type coercion but === checks only for exactness, i.e it is strict
const favourite = prompt("What is your favourite number")
if(favourite == 23) console.log("Very nice number")// the output is converted to a string and compared
if(favourite === 23) console.log("it is a good number") // this line is not executed because the output of the prompt is a string and '23' is not the same as 23 
// there also is != and !== 
// != checks does type coercion and checks for not equal to, while !== checks for exactly not equal to

// BOOLEAN LOGIC
// AND (&&) is true only when all statements are true
// OR (||) is false only when all statements are false
// NOT (!) inverts the result of a statemnt

const scoreDolphins = (96 + 108 + 89)/3
const scoreKoalas = (88 + 91 + 110)/3 

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win the trophy")
} else if (scoreDolphins === scoreKoalas){
    console.log("Both win the trophy")
}else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log("Koalas win the trophy")
}
// no value is printed because although the average of scoreDolphins is greater than that of scoreKoalas, it is not greater than 100 and && is true only when both are true 


// An expression is a piece of code that produces a value while a statement does not produce a value

// Tenary conditions use '?' to show the result of a condition and ':' to show the alternative result (else) if it does not satisfy the condition
const age = 19
const preference = age >= 18 ? "wine" : "water" // it just functions like an if/ else statement
// because it is not a statement but an expression, it can be used in a literal
console.log(`Can I please have some ${preference}`) // it prints wine because my age is greater than 18

// SWITCH STATEMENTS 
// they are a bit similar to if statements but they do not compare multiplr values. Instead they compare only a single value to multiple results and have a different format

const day = 1
switch (day){
    case 1: console.log("Monday")
       break
    case 2: console.log("Tuesday")
       break
    default: console.log("No day")      
}
// the 'break' stops the execution of the switch statement and exits the block

//EXERCISE 
const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip = bill > 50 && bill < 300 ? (15/100)*bill : (20/100)*bill
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

// Because recent versions of JS will not work on older browser versions, It is recommended to carry out transfiling 
// this is the process of converting to ES5. this can be done using a tool called Babel

// This is the end of this section. More detailed information can be seen in the PDF in this folder