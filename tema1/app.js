
var numar;

function numarRandom(dela, panala) {
	return Math.floor(Math.random()*panala + dela);
}

function generate() {
	numar = numarRandom(0, 100);
	console.log(numar);
}

function checkValue() {
	var myNumar = document.getElementById("mytext");

	if (myNumar.value == numar) {
		alert("Ai ghicit! Joc nou")
		generate();
	}
	else {
		if (myNumar.value < numar)
			alert("Numarul este mai mare decat " + myNumar.value);
		else
			alert("Numarul este mai mic decat " + myNumar.value);
	}

	myNumar.value = "";
}
