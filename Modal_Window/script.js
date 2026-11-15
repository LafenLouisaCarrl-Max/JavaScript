'use strict';

const showBtnModal = document.querySelectorAll('.show-modal') // we use 'All' so that it takes every element with that class 
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeBtnModal = document.querySelector('.close-modal')

console.log(showBtnModal) // this returns an array of all the btns

// we use the 'classList' method to access a class that needs to be altered in the DOM.
// we could also use style but it is easier since we could just style a class and add or remove it rather than styling it in the DOM
const closeModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const openModal = function(e){
    console.log('button has been clicked')
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
    console.log()
}

// Make sure to not call the function. just use the function name, so js does not call it imediately as the code is run but when the button is clicked.
for (let i = 0; i < showBtnModal.length; i++){
    showBtnModal[i].addEventListener('click', openModal)
}
closeBtnModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

// Adding a key event listener, such that when a the 'esc' button on the keyboard is pressed, the modal disappears as well
// there are 3 types of key event listeners, i.e. 
// keydown( occurs once as the key is pressed), 
// keypress( occurs continously as the key is being pressed),
// keyup( occurs once the key has been pressed and released)
// we will be using keydown

// We want to listen such that the keydown occurs only when the modal is open 

document.addEventListener('keydown', function(event){
    // we are passing a paramenter in the function because we want to check the information about the action that is occuring.
    // javascript gives us this information as a pointerEvent in the form of an object.
    // we can then use this to check the key that is being pressed.
    console.log(event)

    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal() // here we will actually call the function 
    }
})

