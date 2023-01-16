// 2- Write a script that shows a “typing message” appearing in a new child window.
// The new window should close after few seconds of displaying your message
function showMessage() {
    window.open("message.html", "", "width=600, height=200")
}

// 4- Create a simple photo gallery like the following, and use opacity property to make each image fades out gradually
// (its opacity decreases to 0.3 gradually) when mouse is over it, and fades in gradually
// (its opacity increases to 1 gradually) when mouse is a way.
var fadeFactor = 0.05

function fadeOut(element) {
    element.style.opacity = 1

    var x
    x = setInterval(function () {
        element.style.opacity -= fadeFactor

        if (element.style.opacity <= 0.3) {
            clearInterval(x);
        }
    }, 100)

}

function fadeIn(element) {
    element.style.opacity = 0.3

    var x
    x = setInterval(function () {
        element.style.opacity = (parseFloat(element.style.opacity) + fadeFactor).toString()
        
        if (element.style.opacity >= 1) {
            clearInterval(x);
        }
    }, 100)
}

// 5- Create an animation on the page that makes an orange marble move to the next location in the line every second.
// Allow the user to stop the animation by placing the cursor on any marble.
// The animation will restart again once the user remove the cursor from that marble.
// Add your own interesting feature to the script that tinkers with the speed or location of images
var marblesContainer = document.getElementById("marbles")
var marbles = marblesContainer.children
var marblesIntervalId
var currentMarbleOnIndex = 0
var lastMarbleOnIndex = 1


function stopMarbles() {
    window.clearInterval(marblesIntervalId)
}

function startMarbles() {
    marblesIntervalId = setInterval(function () {
        marbles[currentMarbleOnIndex].setAttribute("src", "images/marble2.jpg") // Turn on
        marbles[lastMarbleOnIndex].setAttribute("src", "images/marble1.jpg") // Turn off

        lastMarbleOnIndex = currentMarbleOnIndex
        currentMarbleOnIndex++

        if (currentMarbleOnIndex >= 5) {
            currentMarbleOnIndex = 0
        }
    }, 150)
}
