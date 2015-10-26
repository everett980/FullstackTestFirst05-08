// 06_Functional 
function doubler(num) {
	return num*2;
}

function map(array, func) {
	var returnMe = [];
	for (var i = 0; i<array.length; i++) {
		returnMe.push(func(array[i]));
	}
	return returnMe;
}

function filter(array, func) {
	var returnMe = [];
	for (var i = 0; i<array.length; i++) {
		if(func(array[i])) {
			returnMe.push(array[i]);
		}
	}
	return returnMe;
}

function contains(array, num) {
	for (var key in array) {
		if(array[key] === num) {
			return true;
		}
	}
	return false;
}

function countWords(inputString) {
	return inputString.split(" ").length;
}

function reduce(array, startVal, func) {
	var runningTotal = startVal;
	for(var key in array) {
		runningTotal+=func(array[key],startVal);
	}
	return runningTotal;
}

function countWordsInReduce(inputString, num) {
	return countWords(inputString)+num;
}

function sum(nums) {
	return reduce(nums, 0, function(current, next) {
		return current + next;
	});
};

function every(nums, func) {
	for(var key in nums) {
		if(!func(nums[key])) {
			return false;
		}
	}
	return true;
}

function any(nums, func) {
	for(var key in nums) {
		if(func(nums[key])) {
			return true;
		}
	}
	return false;
}

