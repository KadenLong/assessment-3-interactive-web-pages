console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Successful. Thanks for your submission. Quack')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function compliment() {
	alert('You are so pretty and/or handsome. Quack.')
}

const duckPic = document.querySelector('img')
duckPic.addEventListener('mouseover', compliment)