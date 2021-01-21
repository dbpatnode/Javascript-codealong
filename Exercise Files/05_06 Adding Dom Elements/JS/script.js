const FEATURED = document.querySelector(".featured-image")
const FEATUREDIMAGE = FEATURED.querySelector("img")
const TOPDIV=document.querySelector(".top-pitch")
// this can also be written as :
// const FEATUREDIMAGE = document.querySelector(".featured-image img")

// grabbing current element properties
let altText = FEATUREDIMAGE.getAttribute("alt")
// let srcAttribute = FEATUREDIMAGE.getAttribute("src")

// creating elements
let captionElement = document.createElement("figcaption")

let newImage= document.createElement("img")
// let newSrc=document.createElement("src")
// let newAlt=document.createElement("alt")

newImage.setAttribute("src", "https://images-na.ssl-images-amazon.com/images/I/71UfSpR%2B7cL._AC_SL1500_.jpg")
newImage.setAttribute("alt", "nothing like a good watergun fight")


// let captionText= document.createTextNode(altText)

// // placing the alt text as the caption for the images
// captionElement.appendChild(captionText)

// // adding the figcaption(caption) to the image!!
// FEATURED.appendChild(captionElement)

captionElement.append(altText)

FEATURED.append(captionElement)
captionElement.append(newImage)




// and setting the alt to blank so that screen readers arent confused
FEATUREDIMAGE.setAttribute("alt", "")

// changes image on the screen
FEATUREDIMAGE.setAttribute("src", "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80")



console.log("Featured class: ",FEATURED)
console.log("Image within Featured class: ",FEATUREDIMAGE)
console.log("Image alt attribute Content: " , altText)
console.log("image src attribute: ", srcAttribute)

// console.logging to make sure that the caption was created.
console.log("Caption Element with caption text appended ", captionElement)

// checking to see that the alt is no longer assigned
console.log(FEATUREDIMAGE.querySelector("alt"))