
// were telling our function that were taking in two different variables. 
// when this is invoked it must take in two different variables (whatever numbers get 
// thrown into the parenthesis when invoked)
function findBiggestFraction(a, b) {
    a>b ? console.log("a: ", a) : console.log("b: ", b);
}

var firstFraction = 3/4;
var secondFraction = 5/7;

// its highly reusable!
findBiggestFraction(firstFraction, secondFraction);
findBiggestFraction(32/657, 89/139)
