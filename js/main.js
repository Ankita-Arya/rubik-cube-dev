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

var cubex = -25,    // initial rotation
cubey = -40,
cubez = 0;
function rotate(variableName, degrees) {
    window[variableName] = window[variableName] + degrees;
    rotCube(cubex, cubey, cubez);
}
function rotCube(degx, degy, degz){
    segs = "rotateX("+degx+"deg) rotateY("+degy+"deg) rotateZ("+degz+"deg) translateX(0) translateY(0) translateZ(0)";
	document.getElementById('cubeDiv').style.transform = segs;
}
function turnRight() {
    rotate("cubey", 90);
}
function turnLeft() {
    rotate("cubey", -90);
}
function flipCube() {
    rotate("cubez", -180);
}
var windowOrientation = window.orientation;

var turnCube = function() {
	
}

window.addEventListener('deviceorientation', function(event){
	this.console.log(event);
	this.document.getElementById('check').innerHTML = JSON.stringify(event);
	// if((windowOrientation === 0 && this.window.orientation === 90) || 
	// (windowOrientation === -90 && this.window.orientation === 0) || 
	// (windowOrientation === 90 && this.window.orientation === -90)) {
	// 	turnLeft();
	// 	windowOrientation = window.orientation;
	// 	this.document.getElementById('check').innerHTML = 'Turned Left';
	// }
	// else if((windowOrientation === 0 && this.window.orientation === -90) || 
	// (windowOrientation === 90 && this.window.orientation === 0) || 
	// (windowOrientation === -90 && this.window.orientation === 90)){
	// 	turnRight();
	// 	windowOrientation = window.orientation;
	// 	this.document.getElementById('check').innerHTML = 'Turned Right';
	// }
	// else if(this.window.orientation === 180)
		
});

