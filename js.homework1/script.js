/* задачи №1 */

let flat = prompt ('Введите номер квартиры');

if ( flat < 1 || flat > 100) {
	console.log ('Указанной вами квартиры не существует')
} else if (flat >= 1 && flat <= 20 ) {
	console.log ('1 подъезд');
} else if (flat >= 20 && flat <= 40) {
	console.log ('2 подъезд');
} else if (flat >= 40 && flat <= 60) {
	console.log ('3 подъезд');
} else if (flat >= 60 && flat <= 80) {
    console.log ('4 подъезд');
} else if (flat >= 80 && flat <= 100) {
	console.log ('5 подъезд');
}

/* задача №2 */

let carBrands = prompt ('Введите одну из популярных марок автомобилей');

switch (carBrands) {
	case 'Toyota':
	    alert ('Toyota - страна производитель Япония');
	    break;
	case 'Volkswagen':
	    alert ('Volkswagen - страна производитель Германия');
	    break;
	case 'Ford':
	    alert ('Ford - страна производитель США');
	    break;
	case 'Nissan':
	    alert ('Nissan -страна производитель Япония');
	    break;
    case 'Honda':
        alert ('Honda - страна производитель Япония');
        break;
    case 'Hyundai':
        alert ('Hyundai - страна производитель Южная Корея');
        break;
    default:
        alert ('some_input - страна производитель неизвестна; либо данная марка не является достаточно популярной.');
}

/* задача №3 */

let year = prompt ('Введите год');

if (year % 100 == 0 && year % 400 != 0) {
	console.log ('Не високосный');
} else if (year % 4 == 0) {
	console.log ('Високосный');
} else if (year % 4 != 0) {
	console.log ('Не високосный')
}

/* задача №4 */

let num = +prompt ('Введите число от 1 до 20');
let i = 1;

while (i <= 20) {
	console.log (num + 'x' + i + '=' + (num * i));
	i++;
}

/* задача №5 */

let total = 0;

for (let i = 1; i < 50; i++) {
	if (i % 2 == 0) continue; {
		total+=i;
	}
}
console.log (total);

/* задача №6 */

let first = 0; second = 1; third = 1;

for (let i = 1; i <= 15; i++) {
	third = first + second;
	first = second;
	second = third;
	console.log (third);
} 

/* задача №7 */

let row = '  #  #  #  #';
let rowNext = '#  #  #  #';

for (let i = 1; i <= 4; i++) {
	console.log (row);
	for (let j = 1; j <= 4; j++) {
		console.log (rowNext);
	}
}