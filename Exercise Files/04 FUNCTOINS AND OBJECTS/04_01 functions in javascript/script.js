
// Regular function, called explicitly by name:
function multiply() {
    var result = 3 * 4;
    console.log("3 multiplied by 4 is ", result);
}
multiply();
// ^^ must invoke function for it to run ^^



// Anonymous function stored in variable.
// Invoked by calling the variable as a function:
const divided = function() {
    var result = 3 / 4;
    console.log("3 divided by 4 is ", result);
}
divided();
// ^^ must invoke function for it to run ^^



// Immediately Invoked Function Expression.
// Runs as soon as the browser finds it:
(function() {
    var result = 12 / 0.75;
    console.log("12 divided by 0.75 is ", result);
}())
// don't need to invoke this type of function
