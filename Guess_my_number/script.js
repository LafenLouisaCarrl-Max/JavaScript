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

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

document.querySelector('.score').textContent = score


document.querySelector('.check').addEventListener('click', 
    function () {
        const guess = Number(document.querySelector('.guess').value)
        console.log(guess)

        if (!guess){
           document.querySelector('.message').textContent = 'No number!' 
        }else if (secretNumber === guess){
            document.querySelector('.message').textContent = '✅ Correct Number!'
            document.querySelector('.number').textContent = secretNumber

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
                document.querySelector('.message').textContent = guess > secretNumber ? '📈 too high!' : '📈 too high!' 
                score--
                document.querySelector('.score').textContent = score
            }else {
                document.querySelector('.message').textContent = '🤦🏽‍♀️You lost the game!'
                document.querySelector('.score').textContent = 0
            }  
        }/*else if ( guess > secretNumber ){
             if (score > 1){
                document.querySelector('.message').textContent = '📈 too high!'
                score--
                document.querySelector('.score').textContent = score
            }else {
                document.querySelector('.message').textContent = '🤦🏽‍♀️You lost the game!'
                document.querySelector('.score').textContent = 0
            } 
        }else if (guess < secretNumber){
            if (score > 0){
                document.querySelector('.message').textContent = '📉 too low!'
                score--
                document.querySelector('.score').textContent = score
            }else {
                document.querySelector('.message').textContent = '🤦🏽‍♀️You lost the game!'
                document.querySelector('.score').textContent = 0
            } 
            
        }*/
    }
)

// A continuation of using the DOM to include the functionality of the guess my number site

document.querySelector('.again').addEventListener('click', 
    function (){
        secretNumber = Math.trunc(Math.random() * 20) + 1
        score = 20
        document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.number').style.width = '15rem'
        document.querySelector('.message').textContent = 'Start guessing...'
        document.querySelector('.score').textContent = score
        document.querySelector('.guess').value = ' '
        document.querySelector('.number').textContent = '?'
    }
)