function Mammal(givenName) {
// new Object();
// this = {}.__proto__ ==> Mammal.prototype
	this.name=givenName;
	this.offspring = [];

	//{name:,offspring:}
}

//new Mammal()

Mammal.prototype.sayHello = function() {
		return "My name is "+this.name+", I'm a Mammal";
	}

Mammal.prototype.haveBaby = function() {
		var babyName = "Baby "+this.name;
		var baby = new Mammal(babyName);
		this.offspring.push(baby);
		return baby;
	}

var cat = new Cat();
function Cat(givenName, givenColor) {
	// this = {}.__proto__ == > Cat.prototype
	Mammal.call(this, givenName);
	// {name: , offspring}.__proto__ ===> Cat.prototype
	this.color = givenColor;
}

// cat = {name, offspring, color}.__proto__ ==> Cat.prototype ==> Object.prototype

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat
// cat = {name, offspring, color}.__proto___ ==> Cat.prototype = {} ==> Mammal.prototype

Cat.prototype.haveBaby = function(babyColor) {
		var babyName = "Baby "+this.name;
		var baby = new Cat(babyName, babyColor);
		this.offspring.push(baby);
		return baby;
	}

// cat = new Cat("Benjen", "Blue");
// cat.haveBaby("Grey");
// cat.name = "Stark";
// Mammal.prototype.haveBaby.call(cat,'thenname')

// console.log(cat);
// After an hour of struggling with the last spec (ensuring 
// blue_cat is an instanceof cat), I have finally come to 
// utility the superiority of 'this'. Creating variables like
// 'returnMe' was a bad habbit I picked up in Java, and 
// caused troubles with inheritance in JavaScript. 