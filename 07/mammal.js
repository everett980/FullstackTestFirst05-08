function Mammal(givenName) {
	new Object();
	this.name=givenName;
	this.offspring = [];
	this.__proto__.sayHello = function() {
		return "My name is "+this.name+", I'm a Mammal";
	}
	this.__proto__.haveBaby = function() {
		var babyName = "Baby "+this.name;
		var baby = new Mammal(babyName);
		this.offspring.push(baby);
		return baby;
	}
	return this;
}

function Cat(givenName, givenColor) {
	Mammal.call(this, givenName);
	this.color = givenColor;
	this.__proto__.haveBaby = function(babyColor) {
		var babyName = "Baby "+this.name;
		var baby = new Cat(babyName, babyColor);
		this.offspring.push(baby);
		return baby;
	}
	return this;
}

// After an hour of struggling with the last spec (ensuring 
// blue_cat is an instanceof cat), I have finally come to 
// utility the superiority of 'this'. Creating variables like
// 'returnMe' was a bad habbit I picked up in Java, and 
// caused troubles with inheritance in JavaScript. 