/* 1 */

function placeOrder() {
	let name = document.getElementById('name');
	let minutes = document.getElementById('minutes');

	if (name.value !== '' && minutes.value !== '' && !isNaN(minutes.value)) {
		console.log('Все четко!');
	} else {
		console.log('Косяк!');
	}
}

/* 2 */ 

let formSend = document.getElementById('formSend');
formSend.addEventListener('click', function(e){
	formSend.setAttribute('action', 'mailto:address@domen.domen');
});

function reset() {
	document.getElementById('formSend').reset();
};

/* 3,4 */

let nameFrom = document.getElementById('nameRegistration');
	nameFrom.onblur = function(event) {
		let regExName = /([а-я]|[a-z])/i;

		if (!regExName.test(this.value)) {
			this.value = 'True';
			this.style.background = 'red';
		} else {
			alert('All right!')
		}
	}


let email = document.getElementById('email');
	email.onblur = function(event) {
		let regExEmail = /(\w+\-\w+@\w+.\w+|\w+@\w+.\w+)/i;

		if(!regExEmail.test(this.value)) {
			this.value = 'True'
			this.style.background = "red";
		} else {
			alert('All right!')
		}			
	}

let old = document.getElementById('old');
	old.onblur = function(event) {
		let regExOld = /\d+/;

		if (!regExOld.test(this.value)) {
			this.value = 'Enter the age in numbers, please';
			this.style.background = 'red';
		} else {
			alert('All right!')
		}
	}
let password = document.getElementById('password');
	password.onblur = function(event) {
		let regExPassword = /(\w{6,12})/i;

		if (!regExPassword.test(this.value)) {
			this.value = 'Password contains from 6 to 12 symbols';
			this.style.background = "red";
		} else {
			alert('All right!')
		}
	}

/* 5 */

function replaceFunction() {
	textFunction.innerHTML = 'Написать скрипт, которые заменяет слово «функция» в тексте на «функция», используя регулярные вырожения.'
	let regExText = /функция/g;
	replaceButton.addEventListener('click', function(event) {
		let newText = textFunction.innerHTML.replace(/функция/g, 'ФУНКЦИЯ');
		textFunction.innerHTML = newText;
	})
}
replaceFunction();

/* 6 */ 

function checkDate() {
	let regExDate =/^([01]\d|2[0-3]):[0-5]\d\s[ap]m$/g;
	let strOne = '9.59 am'
	textDiscover.innerHTML = strOne;

buttonDiscover.addEventListener("click", function(event) {
	if (regExDate.test(strOne)) {
		alert('True')
	} else {
		alert('False')
	}
})
}
checkDate();