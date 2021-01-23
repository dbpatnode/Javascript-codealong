const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLE2= document.querySelector('.circle2')


let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    let horizontalPositionCircle1 = windowWidth - e.clientX - 26;
    let verticalPositionCircle1 = windowHeight - e.clientY - 26;

    let horizontalPositionCircle2 = windowWidth - e.clientX + 10;
    let verticalPositionCircle2 = windowHeight - e.clientY + 10;


    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPositionCircle1 + 'px';
    CIRCLE.style.top = verticalPositionCircle1 + 'px';

    CIRCLE2.style.left = horizontalPositionCircle2 + 'px';
    CIRCLE2.style.top = verticalPositionCircle2 + 'px';
}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);