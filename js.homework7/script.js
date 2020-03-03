/* 1 */

let list = document.getElementById('elem');
list.classList.add('www');

console.log(list);

/* 2 */

if (elem.className == 'www') {
	console.log('true');
	} else {
		console.log('false');
	}

elem.classList.remove('www');

console.log(elem);

/* 3 */

function recursiveSearchTags(document, tagName) {
	let mas = document.body.getElementsByTagName(tagName);
	return mas = [].slice.call(mas);
}

console.log(recursiveSearchTags(document, 'div'));

/* 4 */

let arr = ['жизнь', 'как', 'стартап'];  

function getArray(arrNumbers) {
  let parent = document.body;
  let ul = document.createElement('ul');

  for (i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    let text = document.createTextNode(arrNumbers[i]);

    if (i % 2==0) {
      li.style.background = 'red';
    }
    li.appendChild(text);
    ul.appendChild(li);
    parent.appendChild(ul);
    }
}

getArray(arr);

/* 5 */

let previos = elem.previousElementSibling;
let textNode = document.createTextNode('!');

previos.appendChild(textNode);


