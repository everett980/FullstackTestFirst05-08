// Functions.js

var concat_string = function() {
	// return Array.prototype.slice.call(arguments).join();
	var returnMe = "";
	for(var key in arguments) {
		returnMe+=arguments[key];
	}
	return returnMe;
}

var yourFunctionRunner = function() {
	var returnMe = "";
	for(var key in arguments) {
		returnMe+=arguments[key]();
	}
	return returnMe;
}

var makeAdder = function(num) {
	var newFunc = function(num2) {
		return num2 + num;
	}
	return newFunc;
}

var once = function(func) {
	var neverCalled = true;
	var newFunc = function() {
		if(neverCalled) {
			func();
			neverCalled = false;
		}
	};
	return newFunc;
}

var createObjectWithTwoClosures = function() {
	var myObj = new Object();
	var myValue = 0;
	myObj.getValue = function() {
		return myValue;
	};
	myObj.oneIncrementer = function() {
		myValue++;
	};
	myObj.tensIncrementer = function() {
		myValue+=10;
	};
	return myObj;
}


// var createObjectWithTwoClosures = function() {
// 	var myValue = 0;
// 	var getValue = function() {
// 		return myValue;
// 	}
// 	var oneIncrementer = function() {
// 		myValue++;
// 	}
// 	var tensIncrementer = function() {
// 		myValue+=10;
// 	}
// }





