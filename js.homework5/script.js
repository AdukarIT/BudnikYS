/* 1 */ 

let arrRandom = [];
function getNumRandom(min, max) {
	for (i = 0; i < 3; i++) {
		arrRandom[i] = Math.round ((Math.random()) * (max - min) + min);
	}
	return arrRandom;
}

console.log(getNumRandom(1, 50));

/* 2 */

function changeArr(arrRandom) {
	let newArray = [];

	for (i = 0; i < arrRandom.length; i++) {

		let obj = {
			initial: arrRandom[i],
			sqrt: Math.sqrt(arrRandom[i]),
		}
		obj['sqrt100'] = obj['sqrt'].toFixed(2);

		if (Math.round(obj.sqrt) == Math.floor(obj.sqrt)) {
			obj.floor = true;
		} else {
			obj.floor = false;
		}
		if (Math.round(obj.sqrt) == Math.ceil(obj.sqrt)) {
			obj.ceil = true;
		} else {
			obj.ceil = false;
		}
		newArray[i] = obj;
	}
	return newArray;
}

console.log(changeArr(arrRandom));

/* 3 */ 

let string = prompt('Проверка строки');

function palindrome(string) {
	let length = string.length;
	let middle = Math.floor(length/2);

	for (let i = 0; i < middle; i++) {
		if (string[i] !== string[length - 1 - i]) {
			return 'Не палиндром';
		} else {
			return 'Палиндром';
		}
	}
}

console.log(palindrome(string));

/* 4 */

let str = prompt('Введите текст');

function repeatSymbols(str) {
	let strEmpty = '';

	for (let i = 0; i < str.length; i++) {
		if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
			strEmpty += str[i];
		}
	}
	return strEmpty;
}

console.log(repeatSymbols(str));

/* 5 */

function changeSymbols(str, search, replace) {
	let arr = str.split('');

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].includes(search)) {
			arr[i] = arr[i].replace(search, replace);
		}
	}
	return arr.join('');
}

changeSymbols('какой-то текст');

/* 6 */ 

function caseUpper(str) {
  str = str[0].toUpperCase() + str.slice(1, str.length);

  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length);
    }
  }
  return str;
}

console.log(caseUpper('как я бросил экономику и стал программистом'));

/* 7 */ 

function repeatSymbols(str) {

	for (let i = 0; i < str.length - 1; i++) {
		if (str[i] === '*' || str[i] === ' ') {
			continue;
		}

		for (let j = i + 1; j < str.length; j++) {
			if (str[i] === str[j]) {
				str = str.slice(0, j) + '*' + str.slice(j + 1, str.length);
			}
		}
	}
	return str;
}

console.log(repeatSymbols('я учусь программированию'));

/* 8 */

function daysOfWeekNow() {
	let day = new Date();
	switch(day.getDay()) {
		case 1:
		    return 'Monday';
		case 2:
		    return 'Tuesday';
		case 3:
		    return 'Wednesday';
		case 4:
		    return 'Thursday';
		case 5:
		    return 'Friday';
		case 6:
		    return 'Saturday';
		case 0:
		    return 'Sunday';
	}
}

console.log(daysOfWeekNow());

/* 9 */ 

function getDayOfWeek(date) {
  switch (date.getDay()) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 0:
      return 'Sunday';
  }
}

function getDayOfWeekUser() {
  var userDate = prompt('Введите дату в формате ДД-ММ-ГГГГ','ДД-ММ-ГГГГ'),
  date = new Date(+userDate.slice(6, 10), +userDate.slice(3, 5) - 1, +userDate.slice(0, 2));

  return getDayOfWeek(date);
}

console.log(getDayOfWeekUser());

