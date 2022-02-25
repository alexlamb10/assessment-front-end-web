// Select html elements
let colorBtn = document.getElementById('color')
let placeBtn = document.getElementById('place')
let ritualBtn = document.getElementById('ritual')

// functions

function displayColor(){
    alert('My favorite color is blue!')
}

function displayPlace(){
    alert('My favorite place is Vanuatu!')
}

function displayRitual(){
    alert('My favorite ritual is listening to music while working!')
}

// event listener

colorBtn.addEventListener('click', displayColor)
placeBtn.addEventListener('click', displayPlace)
ritualBtn.addEventListener('click', displayRitual)