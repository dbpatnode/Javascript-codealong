function findBiggestFraction(a,b) {
    let result
    a>b ? result = ["firstFraction", a] : result=["secondFraction", b]
    return result
}

var firstFraction = 3/4;
var secondFraction = 5/7;

let fractionResults= findBiggestFraction(firstFraction,secondFraction);
// creating  a variable that can be used further down.

console.log(fractionResults)
// gives us an array with the larger fractions name and its value

console.log("first fraction result: ", firstFraction)
// gives value of firstFraction

console.log("second fraction result: ", secondFraction)
// gives value of secondFraction

console.log("fraction "+ fractionResults[0] + " with a value of " + fractionResults[1] + " was larger")
// grabs the name (fractionResults[0]) and value of the larger of the two fractions and throws
// it into a string