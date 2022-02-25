console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form was submitted');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function compliment(){
	alert('You are perfect!')
}

let pic = document.querySelector('img')

pic.addEventListener('mouseover', compliment)