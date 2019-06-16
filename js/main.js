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
function rotCube(degx, degy, degz) {
	segs = "rotateX(" + degx + "deg) rotateY(" + degy + "deg) rotateZ(" + degz + "deg) translateX(0) translateY(0) translateZ(0)";
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

function throttle(fn, threshhold, scope) {
	threshhold || (threshhold = 250);
	var last,
		deferTimer;
	return function () {
		var context = scope || this;

		var now = +new Date,
			args = arguments;
		if (last && now < last + threshhold) {
			// hold on to it
			clearTimeout(deferTimer);
			deferTimer = setTimeout(function () {
				last = now;
				fn.apply(context, args);
			}, threshhold);
		} else {
			last = now;
			fn.apply(context, args);
		}
	};
}

if (window.DeviceOrientationEvent) {
	alert(window.DeviceOrientationEvent);
	window.addEventListener('deviceorientation', throttle(function (event) {
		turnLeft();
		document.getElementById('check').innerHTML = event.gamma;
		//for portrait and upside down, flip cube
		if ((event.alpha === 0 && event.beta === 90 && event.gamma === 0) || event.alpha === 180 && event.beta === -90 && event.gamma === 0)
			flipCube();
		//for landscape left turn right	
		if (event.alpha === 0 && event.beta === 90 && event.gamma === -90)
			turnRight();
		//for landscape right turn left
		if (event.alpha === 0 && event.beta === 90 && event.gamma === 90)
			turnLeft();
	}, 1000));
}

