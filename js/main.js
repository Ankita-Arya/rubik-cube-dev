var arrayOfGridContainers = document.getElementsByClassName('grid-container');
var numberOfColumns = 3;

function init() {
	var gridColumns = '';
	for (var k = 0; k < numberOfColumns; k++) {
		gridColumns += ' auto';
	}
	var html = '<div class="grid-item"></div>';
	var addElements = '';
	for (var j = 0; j < numberOfColumns * numberOfColumns; j++) {
		addElements += html;
	}
	for (var i = 0; i < arrayOfGridContainers.length; i++) {
		arrayOfGridContainers[i].innerHTML = addElements;
		arrayOfGridContainers[i].style['grid-template-columns'] = gridColumns;
	}
}
init();

function incrementColumns() {
	if (numberOfColumns === 6)
		return;
	numberOfColumns++;
	init();
}
function decrementColumns() {
	if (numberOfColumns === 3)
		return;
	numberOfColumns--;
	init();
}

window.addEventListener('deviceorientation', function(event){
	this.console.log(event, 'check event');
})