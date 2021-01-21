
// grabbing the CTA class(.cta) link (a) element 
const CTAELEMENT= document.querySelector(".cta  a")


// you can test that this is working by going to index html (lines 93/94 and changeing weather .cta has a
// target attribute set.)
// if "target" attibute is set you'll get a console log of the attributes value
// if "target" is not set, then a target attribute is added with the value of blank

// if target element already has target attribute console.log it 
if (CTAELEMENT.hasAttribute("target")) {
    console.log(CTAELEMENT.getAttribute("target"))
// if no target attribute set attribute of target with a "_blank value"
} else {
    CTAELEMENT.setAttribute("target", "_blank")
}

console.log(CTAELEMENT.attributes)