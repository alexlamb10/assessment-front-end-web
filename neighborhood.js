let resPickerBtn = document.getElementById('resBtn')

function chooseRestaurant(){
    let restaurantsArr = ['Burger Bar', 'Thai Pizza', 'Rice King', 'McDonalds', 'Chinese Buffet']
    let randomNum = Math.floor(Math.random() * restaurantsArr.length)
    let chosenRes = restaurantsArr[randomNum]
    alert('You should go eat at ' + chosenRes + '!')
}

resPickerBtn.addEventListener('click', chooseRestaurant)