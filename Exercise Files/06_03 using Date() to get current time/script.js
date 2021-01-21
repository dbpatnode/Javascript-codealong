
// Grabs the hand #ids from the HTM:
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// Assigns of numerical amount to how many degrees for use with rotate styling below
let hourPosition = 20
let minutePosition = 130
let secondPosition = 267

// assigns transform styling to each hand with the degrees established above
HOURHAND.style.transform = "rotate(" + hourPosition + "deg)"
MINUTEHAND.style.transform = "rotate(" + minutePosition + "deg)"
SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)"