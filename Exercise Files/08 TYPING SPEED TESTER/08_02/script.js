const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:


// Match the text entered with the provided text on the page:

/////////////////////
// Start the timer://
/////////////////////

function start() {
   let textEnteredLength = testArea.value.length
   console.log(textEnteredLength)
}

function spellCheck() {
    let enteredText = testArea.value
    console.log(enteredText)
}


//////////////////////
// Reset everything://
//////////////////////

function reset() {
    console.log("reset button pressed")
}
/////////////////////////////////////////////////////////////
// Event listeners for keyboard input and the reset button://
/////////////////////////////////////////////////////////////

// checking when the key is initially pressed within the text area
testArea.addEventListener('keypress', start, false)
// checking when the key is let go within the text area is equal to the text in the test
testArea.addEventListener('keyup', spellCheck, false)

resetButton.addEventListener('click', reset,false)

// resetButton.addEventListener('click', startTimer, false)