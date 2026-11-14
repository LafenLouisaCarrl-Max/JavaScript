'use strict';
/*
console.log(document.querySelector('.message').textContent)

// The DOM (Document Object Model) is a structured representation of html documents. 
// It is a means through which Javascriipt can communicate and modify html and style documents.
// document.queryselector is not part of js but a web API

// ** Selecting and Manipulating Elements

document.querySelector('.message').textContent = 'Correct Answer'
document.querySelector('.score').textContent = 5
document.querySelector('.number').textContent = 8
document.querySelector('.highscore').textContent = 25
document.querySelector('.guess').value = 25 //value instead of textcontent because it is an input element.
*/

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}
const displayScore = function(score){
    document.querySelector('.score').textContent = score
}
const displayNumber = function(number){
    document.querySelector('.number').textContent = number
}

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0
let target = 20

// displayScore(score)
displayScore(score)


document.querySelector('.check').addEventListener('click', 
    function () {
        const guess = Number(document.querySelector('.guess').value)
        console.log(guess)
        if (!guess){
           displayMessage('No number!') 
        }else if(guess > target || guess < 0){
            displayMessage('Guess a whole number between 1 and 20 inclusively')
            score--
            displayScore(score)
        }else if (secretNumber === guess){
            displayMessage('✅ Correct Number!')
            displayNumber(secretNumber)

            // Manipulating CSS in the DOM
            // attributes with two words will now use the camel casing notation
            // the value assigned is always a string and should be in quotes even if it is a number
            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').style.width = '30rem'

            if (score > highscore){
              highscore = score
              document.querySelector('.highscore').textContent = highscore
            }
            
        }else if (guess !== secretNumber){
            if (score > 1){
                document.querySelector('.message').textContent = guess > secretNumber ? '📈 too high!' : '📈 too low!' 
                score--
                displayScore(score)
            }else {
                displayMessage('🤦🏽‍♀️You lost the game!')
                displayScore(0)
            }      
        }/*else if ( guess > secretNumber ){
             if (score > 1){
                document.querySelector('.message').textContent = '📈 too high!'
                score--
                displayScore(score)
            }else {
                document.querySelector('.message').textContent = '🤦🏽‍♀️You lost the game!'
                document.querySelector('.score').textContent = 0
            } 
        }else if (guess < secretNumber){
            if (score > 0){
                document.querySelector('.message').textContent = '📉 too low!'
                score--
                displayScore(score)
            }else {
                document.querySelector('.message').textContent = '🤦🏽‍♀️You lost the game!'
                document.querySelector('.score').textContent = 0
            } 
            
        }*/ // Taking away this section of the code and replacing it with a single if statement and the use of a tenary operator
    }
)

// A continuation of using the DOM to include the functionality of the guess my number site

document.querySelector('.again').addEventListener('click', 
    function (){
        secretNumber = Math.trunc(Math.random() * 20) + 1
        score = 20
        document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.number').style.width = '15rem'
        displayMessage('Start guessing...')
        displayScore(score)
        document.querySelector('.guess').value = ' '
        displayNumber('?')
    }
)