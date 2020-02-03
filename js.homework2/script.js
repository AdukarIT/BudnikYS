/* 1 */

let a = +prompt ('Введите число');
let b = +prompt ('Введите число');
let c = +prompt ('Введите число');

function arg (a, b, c) {
	if (a < b && a < c) {
		return a;
	} else if (b < a && b < c) {
		return b;
	} else (c < a && c < b) 
		return c;
}

console.log(arg(a, b, c));

/* 2 */

let day = prompt ('Введите значение суток');
let hour = prompt ('Введите значение часов');
let min = prompt ('Введите значение минут');
let totalSeconds

function sec (day, hour, min) {
	totalSeconds = day * 86400 + hour * 360 + min * 60; {
		console.log (totalSeconds);
	} 
}

sec (day, hour, min);

/* 3 */ 

let x = prompt ('Введите число для подсчета его факториала');

function factorial (x) {
	if (x === 1) {
		return x;
	} else {
		return (x * factorial(x - 1));
	}
}

console.log (factorial(x));

/* 4 */ 

function numTurn (x) {
	if (x < 10) {
		return x;
	}

	let num = x % 10;
	x = (x -num) / 10;

	for (let n = x; n >= 1; n /= 10) {
		num *= 10;
	}
	return num + numTurn(x);
}

console.log (numTurn(6789));