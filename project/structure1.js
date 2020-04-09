/*document.addEventListener('DOMContentLoaded', function(event) {

	let form = document.getElementsByTagName('form');
	let search = document.getElementsByTagName('input');
	let sendBnt = document.getElementsByTagName('button');
	sendBnt.addEventListener('click', function() {
        
    });

    closeFormButton.addEventListener('click', closeForm);

	let newTitle = document.createElement('h1');
	let titleContent = document.createTextNode('LIBRARY');
	newTitle.appendChild(titleContent);
	document.body.appendChild(newTitle);

	let navList = document.getElementsByClassName('block-nav-list__list');
	let navListItem = document.getElementsByClassName('block-nav-list__item');

	let navListLink = document.body.getElementsByTagName('a')[0];
	console.log(link.href);
	let navListLink = document.body.getElementsByTagName('a')[1];
	console.log(link.href);
	let navListLink = document.body.getElementsByTagName('a')[2];
	console.log(link.href);

	let containerImage = document.getElementsByClassName('block-container_img');
	let navListContant = document.getElementsByClassName('block-nav-list__content');
	let navListContantTitle = document.getElementsByClassName('block-nav-list__title');*/

document.body.onload = addElement;

function addElement () {
	let newDiv = document.createElement('div');
	let newDiv = document.createElement('div');
	let newTitle = document.createElement('h1');
	let titleContent = document.createTextNode('LIBRARY');
	newTitle.appendChild(titleContent);

	let currentTitle = document.getElementsByClassName('heading-title');
	document.body.insertBefore(newTitle, currentTitle);
}

form_search = document.createElement('FORM');
form_search.name = 'search';
my_tb = document.createElement('INPUT');
my_tb.type = 'text';
my_tb.name = 'key';
my_button = document.createElement('BUTTON');
my_button.type = 'submit';
my_button.name = 'send';
form_search.appendChild(my_tb);
form_search.appendChild(my_button);
document.body.appendChild(form_search);
form_search.submit();

newDiv = document.createElement('div');
listBlock = document.createElement('ul');
listItem = document.createElement('li');
link = document.createElement('a');
img = document.createElement('img');
newDiv = document.createElement('div');
newSpan = document.createElement('span');
newDiv.appendChild(listBlock);
listBlock.appendChild(listItem);
listItem.appendChild(link);
link.appendChild(img);
newDiv.appendChild(newSpan);

navListItem = document.createElement('li');
navListLink = document.createElement('a');
navListImg = document.createElement('img');
navListContant = document.createElement('div');
navListTitle = document.createElement('span');
navListItem.appendChild(navListLink);
navListLink.appendChild(navListImg);
navListContant.appendChild(navListTitle);
