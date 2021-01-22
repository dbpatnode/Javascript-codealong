
// OPEN THIS DAMN THING IN YOUR CONSOLE!!!!!!!

// grabbing the nodes we want
const CTA= document.querySelector(".cta a")
const BOOKINGALERT = document.querySelector("#booking-alert")

//removes hide class  from ".CTA a" 
CTA.classList.remove("hide")

// add hide class to "#booking-alert"
BOOKINGALERT.classList.add("hide")

function reveal(e) {
    //prevents default behavior of link click taking back to the top of page!!!
    e.preventDefault()

    // toggles weather the hide class is attached to .cta a
    CTA.classList.toggle("hide")

    // toggles weather the hide class is attached to #booking-alert
    BOOKINGALERT.classList.toggle("hide")
    }

    CTA.onclick = reveal
