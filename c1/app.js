
function doClick() {

	console.log(event.target);

	var x = event.target;

	x.style.left = numarRandom(1,200) + "px";
	x.style.top = numarRandom(1,200) + "px";
}

function numarRandom(dela, panala) {
	return Math.floor(Math.random()*panala + dela);
}

function deschidePopUp() {
	var overlay = document.getElementById("overlay");
	overlay.style.display = "block";
}

function doTestare() {
	var myText = document.getElementById("myText");
	console.log(myText.value);
	if (myText.value == "Ana") {
		var overlay = document.getElementById("overlay");
		overlay.style.display = "none";
	}
}

/*
comentariu fara autocoplete pt javascript
*/