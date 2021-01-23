const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}


// If theres only one event on something happening useing the onblank event handler style works fine
// CTA.onclick = reveal;
// CTA.onclick = console.log("the button was clicked")


// if you want the event to cause more then one thing to happen (i.e. on the click, it calls on the reveal function AND console logs something using the addEventListener is the way to go)

// addEventListener takes in three arguments: the event ("click, mouseover," whatever), the function its being called on (if you want to console.log something use a anonymous function), and the false boolean.
CTA.addEventListener("click", reveal, false)
CTA.addEventListener("click", function(){console.log("the button was clicked")}, false)
