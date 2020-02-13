/* 1 */

let obj = {
	name: 'Yana',
	age: 19,
}

let string = 'text';

function arg (obj, string) {
	if (string in obj) {
		return true;
	} else {
		return false;
	}
}

console.log(arg(obj, string));

/* 2 */ 

let sandwiches = {
	bread: 2,
	cheese: 2,
	sausage: 2,

	result: function() {
		return ' Два бутерброда: ' + ' белый хлеб ' + ' - ' + this.bread + ',' + ' сыр ' + ' - ' + this.cheese + ',' + ' сосиска ' + ' - ' + this.sausage + '.'
	}
};

console.log(sandwiches.result()); 

/* 3 */ 

let cylinder = {
	radius: 8,
	height: 13,
};

cylinder.volume = function() {
	return 3.14 * (this.radius ** 2) * this.height;
};

console.log (cylinder.volume());

/* 4 */ 

let penguin = {
	name: 'Skipper',
	creator: 'Tom McGrath',
	source: 'Madagascar'
};

penguin.canFly = false;
penguin.sayHello = function () {
	return console.log('Hi! My name is ' + this.name + '. My creator is ' + this.creator + '. You can see me in ' + this.source + '.');
};

penguin.fly =  function() {
	if (this.canFly) {
		return console.log(this.name + 'can fly');
	}
	return console.log(this.name + ' does not fly');
}

penguin.sayHello();
penguin.fly();
