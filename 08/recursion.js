function factorialIterative(num) {
	var result = 1;
	for(; num; num--) {
		result*=num;
	}
	return result;
}

function factorial(num) {
	if (num === 0) {
		return 1;
	}
	return num * factorial(num-1);
}

function fib(num) {
	if(num <= 1) {
		return 1;
	}
	return fib(num-1) + fib(num-2);
}

function type(tellMeType) {
	var modifyString = Object.prototype.toString.call(tellMeType);
	modifyString = modifyString.substring(modifyString.indexOf(' ') + 1);
	modifyString = modifyString.substring(0, modifyString.length - 1);
	return modifyString;
}

function stringify(stringMe) {
	if ((type(stringMe) !== 'Array') && (type(stringMe)) !== 'Object') {
		if(type(stringMe) === 'String') {
			return "\""+stringMe+"\"";
		} else {
			return "" + stringMe;
		}
	} else {
		if ((type(stringMe)) === 'Array') {
			var stringedArray = "";
			for(var key in stringMe) {
				stringedArray += stringify(stringMe[key])+",";
			}
			stringedArray=stringedArray.substring(0, stringedArray.length-1);
			return "["+stringedArray+"]";
		} else {
			var stringedObject = "";
			for(var key in stringMe) {
				if(type(key) === 'String') {
					stringedObject += "\"" + key +"\"" +": ";
				} else {
					stringedObject += stringify(key) +": ";
				}
				if(type(stringMe[key]) === 'String') {
					stringedObject += "\"" + stringMe[key]+"\""+",";
				} else {
					stringedObject += stringify(stringMe[key])+",";
				}
			}
			stringedObject=stringedObject.substring(0, stringedObject.length-1)
			return "{"+stringedObject+"}";
		}
	}









}