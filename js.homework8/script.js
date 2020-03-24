/* 1 */

button.onclick = function() {
	let parent = document.getElement('clone');
	let elem = document.querySelector('.button');
	let clone = elem.cloneNode(true);
	parent.appendChild(clone);
}

/* 2 */ 

books.addEventListener('click', function() {

	books.classList.add('bordered');
})

books.addEventListener('dblclick', function() {

	books.classList.add('striped');
	books.classList.remove('bordered');
})

books.addEventListener('click', function(event) {
	if (event.detail == 3) {

		books.classList.remove('striped');
		books.classList.remove('bordered');
		return books.classList.add('highlight');
	}
})

/* 3 */

radioButtonOne.addEventListener('click', function() {

	radioButtonOne.classList.add('bordered');
})

radioButtonTwo.addEventListener('click', function() {

	radioButtonTwo.classList.add('striped');
	radioButtonOne.classList.remove('bordered');

})

radioButtonThree.addEventListener('click', function() {

	radioButtonThree.classList.add('highlight');
	radioButtonTwo.classList.remove('striped');
})

/* 4 */

buttonNext.innerHTML = 'On';

function off() {
	alert(buttonNext.innerHTML);
}
buttonNext.addEventListener('click', off)

buttonOff.innerHTML = 'Off';

buttonOff.addEventListener('click', function(event) {
 buttonNext.removeEventListener('click', off)

});

/* 5 */

let button_show = document.querySelectorAll('.button_show');

for (let i = 0; i < button_show.length; i++) {
    button_show[i].onclick = function(event) {

    console.log(event.target.tagName);
    }
}  

/* 6 */

backImage.addEventListener('mouseover', function() {
	this.src='backend.png';
});

backImage.addEventListener('mouseout', function() {
	this.src='frontend.png';
});
