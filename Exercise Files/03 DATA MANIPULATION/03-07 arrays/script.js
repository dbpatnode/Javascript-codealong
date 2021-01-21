// longhand of creating new array
let pens
let mixedArray


// this wont work here because pens haven't been defined yet
// var fourthPen = pens[3]

mixedArray = ["thirty", 30, null, false, "one more thing", "four", "bigToe" ]
pens = ["green", "blue", "purple", "black"]

// note that writing this here works because it comes after pens being defined if it were to be written at 
// top then you would get a "Uncaught TypeError: Cannot read property '3' of undefined"

var fourthPen = pens[3]



// shorthand of writing the same arrays 

// pens = new Array("green", "blue", "purple", "black")
// mixedArray= new Array("thirty", 30, null, false, "one more thing", "four", "bigToe" )


console.log(pens)
console.log(mixedArray)
console.log("there are ", pens.length, "items in the pens array")
console.log("there are ", mixedArray.length, "items in the pens array")
console.log("the 4th pen in the array is ", fourthPen)