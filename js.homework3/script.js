/* 1 */ 

let randomArray = getRandomArray(8);
let randomArrayNext = getRandomArray(8);

function getRandomArray (len) {
	let randomArray = [];
	for (let i = 0; i < len; i++) {
		randomArray [i] = Math.random();
	}
	return randomArray;
}

console.log(randomArray);
console.log(randomArrayNext);

/* 2 */

function getNumLargest(arr) {
	let total = 0;

	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	let largest = total / arr.length;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > largest) {
			console.log (arr[i]);
		}
	} 
}

getNumLargest(randomArray);

/* 3 */

function getArray(len) {
	let arr = [];
	for (i = 0; i <= len; i++)
		arr.push(Math.random());
	return arr;
}

function findTwoElements(len) {
	let array = getArray(len);
	let firstNum = array[0];
	let secondNum = array[0];
	for (i = 1; i < array.length; i++) {
		if (array[i] < firstNum) firstNum = array[i];
	}
	for (i = 1; i < array.length; i++) {
		if (array[i] < secondNum && array[i] != firstNum)secondNum = array[i];
	}
	return [firstNum, secondNum];
}

/* 4 */

function deleteElements (arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0.3) {
			arr.splice(i, 1);
			arr.unshift(0);
		}
	}
	console.log(arr);
}

deleteElements(randomArray);

/* 5 */

function sumArrays (arr1, arr2) {
	let sum = [];
	for (let i = 0; i < arr1.length; i++) {
		sum[i] = Math.round ((arr1[i] + arr2[arr2.length - 1 - i]) * 100) / 100;
	}
	return sum;
}

console.log(sumArrays(randomArray, randomArrayNext));

/* 6 */ 

function sortArray (arr) {
	let num = 0;
	let exchange = false;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			num = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = num;
			exchange = true;
		}
	}
	return arr;
}

console.log(sortArray(randomArray));

