/* practice */

/* 1 */

function counterFactory(start, step) {
	function tictoc() {
		return start += step;
	}
	return tictoc;
}

let values = counterFactory(0, 2);

for(let i = 0; i < 8; i++) {
	console.log(values());
}

/* 2 */

let tictoc = function(start = 0, step = 2) {
	return function() {
		return start += step;
	}
} 

function take(tictoc, x) {
	arr = [];

	for (let i = 0; i < x; i++) {
		arr.push(tictoc());
	} 
	return arr;
}

console.log(take(tictoc(), 8))

/* Homework */

/* 1 */

let symbolUnicode = ['которая', 'принимает', 'качестве', 'параметра', 'номер', 'символа'];
function getSum(x) {
	let count = 0;
	symbolUnicode.forEach(function(elem) {
		let sim = String.fromCodePoint(x);

		for (let i = 0; i < elem.length; i++) {
			if (elem[i] == sim) {
				count ++;
			}
		}
	});
	return count;
}

console.log(getSum(1072));

/* 2 */

function countOneSymbol(symbolUnicode) {
	let str = String.fromCharCode(symbolUnicode);

	return function(arr) {

		let counter = 0;
		for (let i = 0; i < arr.length; i++) {

	    let index = 0;
	    while (arr[i].indexOf(str, index) > -1) {
	    	counter++;

	    	index = arr[i].indexOf(str, index) + 1;
	    }
	}

	return counter;
};
}

let countOfF = countOneSymbol(102);
console.log(countOfF(['abf', 'sdfk', 'fdbaa', 'dfdfa']));

let countOfB = countOneSymbol(98);
console.log(countOfB(['abf', 'sdfk', 'fdbaa', 'dfdfa']));



