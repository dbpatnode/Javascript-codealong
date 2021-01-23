
// Grabs the hand #ids from the HTM:
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// Assigns of numerical amount to how many degrees for use with rotate styling below
let date = new Date()

let hour = date.getHours()
let minute = date.getMinutes() 
let second = date.getSeconds()


let hourPosition = hour * (360 / 12)+(minute *(360/60)/12)
let minutePosition = (minute * 360/60)+(second * (360/60)/ 60)
let secondPosition = second * 360/60

console.log("hour: ", hour, "minute: ", minute, "second: ", second)    

    // createing function that will be called to reran at interval at the bottom of 
// page
function runClock(){
    hourPosition = hourPosition + (30/3600)///*12 hours divided by 360 degrees (30)divided by how many seconds in an hour (3600) ==*/
    minutepPosition = minutePosition + (6/60)
    secondPosition = secondPosition + 6 // circle is 360 degrees divided by 60 seconds in a minute == 6


    // assigns transform styling to each hand with the degrees established above
    HOURHAND.style.transform = "rotate(" + hourPosition + "deg)"
    MINUTEHAND.style.transform = "rotate(" + minutePosition + "deg)"
    SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)"
}

// calling runClock function with setInterval method to rerun every 1000 miliseconds
// aka every second.
let interval = setInterval(runClock, 1000)