var n = 20;
var x = 20.15;
var s = "ana are mere"
var q = 'ana are mere'
var f = function (par) {
	return par * 2;
}

var f1 = function (par) {
	return par * 2;
}

var f2 = function (par) {
	return par * par;
}

var transform = function (myFunction, myValue) {
	myFunction(myValue);
}

transform(f1, 10);
transform(f2, 10);

var jsonExample = {
	user : "myUser",
	pass : "youshallnotpass"
}

console.log(jsonExample.user);
console.log(jsonExample["user"]);

var catel = {
	nume : "Azorel",
	greutate : 5,
	latra : function () {
		console.log("HAM");
	} 
};

catel.nume;
catel.latra();