/* 1 */

button.addEventListener('click', function() {
	alert('start');
});

/* 2 */

buttonNext.addEventListener('click', function() {
	this.value = 'button';
});

/* 3 */

enable.addEventListener = function() {
	document.getElementsByName('comment')[0].focus();
}
disable.addEventListener = function() {
	document.getElementsByName('comment')[0].blur();
}
