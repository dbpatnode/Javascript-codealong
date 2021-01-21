// function doSomeMath() {
// 	let a = 5;
// 	let b = 4;
// 	// let sum = a + b;

// 	// return sum;

// 	function multiply(){
// 		let result = a * b;
// 		return result;
// 	}

// 	return multiply;
// }

// let theResult = doSomeMath();

// console.log("The result: ", theResult());

function giveMeEms(pixels){
	let baseValue=16
	
	function doTheMath(){
		return pixels/baseValue
	}
	return doTheMath
}

let smallSize=giveMeEms(12)
let mediumSize=giveMeEms(18)
let largeSize=giveMeEms(24)
let xLargeSize=giveMeEms(32)

console.log("small", smallSize());
console.log("medium", mediumSize());
console.log("large", largeSize());
console.log("xtra large", xLargeSize())

function myfunc(x,y) {
	return(x+y);
	}

	console.log(myfunc(2,myfunc(5,-2)))