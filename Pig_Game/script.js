'use strict';
// Selecting elements
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const current0El = document.getElementById('current--0')
const score1El = document.querySelector('#score--1')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold') 
const btnNew = document.querySelector('.btn--new')
const btnInstruct = document.querySelector('.btn--instructions')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeModal = document.querySelector('.close-modal')

// First step
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

let scores = [0, 0]
let currentScore = 0
let activePlayer = 0
let playing = true

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0
        currentScore = 0
        // switch players
        activePlayer = activePlayer === 0 ? 1 : 0
        player0.classList.toggle('player--active')
        player1.classList.toggle('player--active')
}

// Rolling the dice
btnRoll.addEventListener('click', function(){
    if (playing){
        // Generate random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1
        // console.log(dice)

        // Display dice
        diceEl.classList.remove('hidden')
        diceEl.src = `./images/dice-${dice}.png`

        // Add dice to current score
        if(dice !== 1){
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        }else{
            switchPlayer()
        }
 }
    
})

btnHold.addEventListener('click', function(){
    if (playing){
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        // switchPlayer()

        // find a winner once the score is >= 100
       if (scores[activePlayer] >= 100){
           playing = false
           document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
           document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
           diceEl.classList.add('hidden')
       }else{
           switchPlayer()
       }
    }
    
})

btnNew.addEventListener('click', function(){
    currentScore = 0
    scores = [0, 0]
    activePlayer = 0
    score0El.textContent = 0
    score1El.textContent = 0
    current0El.textContent = 0
    current1El.textContent = 0
    diceEl.classList.add('hidden')
    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
    playing = true
})

const closeInstruction = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

btnInstruct.addEventListener('click', function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

overlay.addEventListener('click', closeInstruction)

closeModal.addEventListener('click', closeInstruction)

document.addEventListener('keydown', function(event){
    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
        closeInstruction()
    }
})
