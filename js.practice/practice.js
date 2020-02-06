/* 1 */

let cathetOne = prompt ('Введите длину первого катета');
let cathetTwo = prompt ('Введите длину второго катета');
let hypotenuse = prompt ('Введите длину гипотенузы');

function triangle (cathetOne, cathetTwo, hypotenuse) {
	if (hypotenuse * hypotenuse == cathetOne * cathetOne + cathetTwo * cathetTwo) {
		return true;
	} else {
		return false;
	}
}

console.log (triangle(cathetOne, cathetTwo, hypotenuse));

/* 2 */

let n = prompt ('Введите число', '2');
let str = prompt ('Введите текст в строку','');

function repeat (str, n) {
	for (i=1; i<=n; i++)
		str *= n;
}
let a = repeat (str, n);
console.log (a);

/* 3 */

let children = prompt ('Введите количество учеников');
let desk = prompt ('Введите количество парт');

function total (children, desk) {
	if (children == desk) {
		return 'Все на местах';
	} else if (children < desk) {
		return 'Есть свободные места';
	} else if (children > desk) {
		return 'Мест не хватает';
	}
}
console.log (total(children, desk));

/* 4 */

let value = prompt ('Введите оценку');

function gradingScale(value) {
	switch(value) {
		case 1:
		case 2:
		    return 'Low';
		    break;
		case 3:
		case 4:
		    return 'Satisfactory';
		    break;
		case 5:
		case 6:
		    return 'Average';
		    break;
		case 7:
		case 8:
		    return 'Good';
		    break;
		case 9:
		case 10:
		    return 'Hight';
		    break;
		default:
		    return 'Error';  
		    break;  
	}
}

gradingScale(value);

/* 5 */

function numZero () {
	let num;
	do {
		num = +prompt ('Введите число');
	} while (num != 0);
}

numZero ();

/* 6 */ 

function numSum () {
	let num, sum = 0; i = 0;
	do {
		num = +prompt ('Введите число');
		sum += num;
		console.log (sum);
		i++;
	} while (sum < 100);
	return i;
}

numSum ();

/* 7 */

function checkPrimeNum (x) {
	if (x == 2) {
		return 'простое';
	} else if (x % 2 == 0) {
		return 'составное';
	} else {
		return 'простое';
	}
}

/* 8 */ 

let m = +prompt ('Введите порядковый номер месяца');

function numMonth (m) {
	switch (m) {
		case 12: 
		case 1: 
		case 2:
		    return 'Winter';
		    break;
 		case 3: 
 		case 4: 
 		case 5:
 		    return 'Spring';
 		    break;
		case 6: 
		case 7: 
		case 8:
		    return 'Summer';
		    break;
		case 9: 
		case 10: 
		case 11:
 		    return 'Autumn';
 		    break;
		default:
		    return 'Error';
		    break;
 	}
}

console.log (numMonth(m));

/* 9 */ 

function showNum () {
	for (let i = 99; i >= 10; i--) {
		if (i % 7 == 0 || i % 10 == 7) {
			console.log (i);
		}
	}
}

console.log (showNum());

/* 10 */

let first = 2;
let second = 20;

let num = +prompt ('Введите число от 2 до 20');

function getNum (first, second) {
	if (num < first || num > second) {
		console.log ('Try again');
	}
}

getNum (first, second);

function divisorNum (first, second) {
	for (let i = 1; i <= num; i++) {
		if (num % i == 0) {
			console.log(i);
		}
	}
}

divisorNum (first, second);

/* 11 */

let x = 2;
let y = 20;

let numXY = prompt ('Введите число от 2 до 20');

function getNum (x, y) {
	if (num < x || num > y) {
		console.log ('Try again');
	}
}

getNum (x, y);

function divisorNum (first, y) {
	for (let i = 1; i <= num; i++) {
		if (num % i == 0) {
			console.log(i);
		}
	}
}

divisorNum (x, y);

/* 12 */ 

function returnBytes (size, unit) {
	let result = 1;
	switch (unit) {
		case 'KB':
		    result = 10 ** 3;
		    break;
		case 'MB':
		    result = 10 ** 6;
		    break;
		case 'GB':
		    result = 10 ** 9;
		    break;
	}
	return size * result;
}

console.log (returnBytes(8, 'KB'));

/* 13 */

function largestDivisor (first, second) {
	while (first != 0 && second != 0) {
		if (first - second > 0) {
			first = first % second;
		} else {
			second = second % first;
		}
	}
	return first + second;
}

console.log (largestDivisor(24, 45));

/* 14 */ 

function largestDivisor (first, second) {
	if (first == 0) {
		return second;
	} else {
		return largestDivisor(second % first, first);
	}
}

console.log (largestDivisor(24, 45));






