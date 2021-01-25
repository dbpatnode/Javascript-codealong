const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

//create a global variable for starting time that is called in the runTimer method, incremting it every tenth of a second from the start() function (that has the set interval called within it) 
let timer = 0


// Add leading zero to numbers 9 or below (purely for aesthetics):

////////////////////////////////////////////////////
// Run a standard minute/second/hundredths timer://
////////////////////////////////////////////////////

function incrementTimer(){
   
    // set the inner html to the global variable of timer (which is set to 0). increment it every 10 miliseconds per the start function. 
    theTimer.innerHTML = timer;
    timer++;

}

// Match the text entered with the provided text on the page:

/////////////////////
// Start the timer://
/////////////////////

function start() {
   let textEnteredLength = testArea.value.length

   // if the test entered length is 0 (it will be after the first key typed, because indexs start at 0) then call the incrementTimer method (set to 10 milisecond intervals)
   if (textEnteredLength === 0) {
       setInterval(incrementTimer, 10)
   }

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