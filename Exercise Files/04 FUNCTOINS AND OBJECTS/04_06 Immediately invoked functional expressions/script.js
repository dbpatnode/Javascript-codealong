
// ANONYMOUS FUNCTION
// let theBiggest = function(a,b) {
//     var result;
//     a>b ? result = ["a", a] : result = ["b", b];
//     return result;
// }

// console.log(theBiggest(7/9,13/25));
// console.log(theBiggest) 
// with normal anonymous functiont this will console.log the entirty of the function, not the results
//will be useful for use in events!

// IMEDIATLY INVOKED FUNCTION

// if your calling outside variables they need to be called before the function otherwise youll get an error:
let firstFraction=7/9;
let secondFraction=13/25


let theBiggest = (function(a,b) {
    let result
    a>b ? result=["a", a] : result=["b", b]
    return result
})//(7/9,13/25)
(firstFraction, secondFraction)

// calling the variables below will not work because the function has already been invoked and it will never have received these 
// variables:

// let firstFraction=7/9;
// let secondFraction=13/25

console.log(theBiggest) 
// with imediatly invoked functions console.console logging the function with out passing in arguments
// returns the results. The arguments are passed with the function itself (at the end in the
// parenthesis).


// The advantages of this are that when the imediatly invoked function is called the function runs regardless of what happens
// later on in the code.
