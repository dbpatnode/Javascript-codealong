// NORMAL CONVENTIONAL FUNCTION

// function findBiggestFraction(a,b) {
//     var result;
//     a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
//     return result;
// }

// var firstFraction = 3/4;
// var secondFraction = 5/7;

// var fractionResult = findBiggestFraction(firstFraction,secondFraction);

// console.log("First fraction result: ", firstFraction);
// console.log("Second fraction result: ", secondFraction);
// console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");



// ANONYMOUS FUNCTION 
// let a = 5/7;
// let b = 7/9;

let largestFraction = function(firstFraction, secondFraction) {
    let result
    firstFraction>secondFraction? result= ["firstFraction", firstFraction] : result= ["secondFraction", secondFraction]
    // console.log(result)
    return result
}

// anoymous functions must be invoked to run.
// largestFraction()

console.log(largestFraction(7/9,18/23))
// we're calling 7/9ths the first fraction and 18/23 the second fraction

