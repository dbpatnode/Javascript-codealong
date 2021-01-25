const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");


   // in order for prevent default to work e(vent) must be passed both in the anonymous function and in the function itself (everything breaks otherwise)
function reveal(e, current) {
 
    e.preventDefault();
    current.innerHTML == "Book Now!" ? CTA.innerHTML = "Oooops" : CTA.innerHTML = "Book Now!"
    // CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}


// in order to get the ternary to work and call the current paramater in the reveal funtion we need to use an anoymous function like so (similar to how we we would console log with addEventListener):
// we need to pass "this" as the argument which in this refers to the object that were refering to (the link in this example). think of e as the current from the reveal() function
//  don't forget to pass e at the begining of the anonymous function and within the function itself

CTA.addEventListener('click', function(e){reveal(e, this)}, false)

// CTA.addEventListener('click', reveal, false);
CTA.addEventListener('click', function(){console.log("The button was clicked!")}, false);
