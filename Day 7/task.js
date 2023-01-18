// 2. Photo gallery with Next, Previous and Slideshow.
// ▪ Next goes to next pic and stops when reaching last image
// ▪ Previous goes back to previous image and stops when reaching first image
// ▪ Slideshow will circulate, i.e. when reach last image is should continue displaying staringfrom first image
// ▪ Stop will stop slideshow behavior.
// ▪ Let the delay between every to image lasts 2 seconds
var imageFrame = document.getElementById("imageFrame")
var currentImageIndex = 0
var slideshowIntervalId

function nextSlide() {
    currentImageIndex++

    if (currentImageIndex >= 6) {
        currentImageIndex = 0
    }

    imageFrame.setAttribute("src", `images/${currentImageIndex}.jpg`)
}

function startSlideshow() {
    slideshowIntervalId = setInterval(function () {
        nextSlide()
    }, 200)
}

function stopSlideshow() {
    window.clearInterval(slideshowIntervalId)
}

function previousSlide() {
    currentImageIndex--

    if (currentImageIndex <= 0) {
        currentImageIndex = 5
    }

    imageFrame.setAttribute("src", `images/${currentImageIndex}.jpg`)
}

// 3. Make your own input type number that accepts numbers only and handle that the user can delete from input.
function customInputLogic(event) {
    var numberRegex = /[0-9]/

    if (!numberRegex.test(event.key) && event.key != "Backspace" ) {
        event.preventDefault()
    }
}

// 4.
var fullNameError = document.getElementById("errorFullName")
var fullName = document.querySelector("input[name='fullname']")

function focusTextBox(element) {
    element.style.border = "3px solid blue"
}

function blurTextBox(element) {
    element.style.border = ""

    if (!(/[a-zA-z]{3,}$/.test(fullName.value))) {
        fullNameError.style.color = "red";
        fullNameError.innerText = "invalid name";
        fullName.focus()
    } else {
        fullNameError.innerHTML = ""
    }
}

function blurPassword(element) {
    var password = document.getElementById("pass").value
//    var passwordRepeat = document.getElementById("pass2").value
    var passwordError = document.getElementById("errorPassword")

    if (element.value == password) {
        passwordError.innerText = "";
    } else {
        passwordError.innerText = "Passwords are not the same";
        passwordError.style.color = "red";
    }
}

// 5. Create a simple form with Add and Reset buttons takes user`s information (name age and email) with validation for each field
// and all fields are required.
// Every time the user enters a right data and press Add button the data is displayed in the table
var tableBodyElement = document.getElementById("tBody")

function addNewRowToTable(event) {
    event.preventDefault()
    var data = [document.getElementById("fullName").value, document.getElementById("age").value, document.getElementById("email").value]

    var tableRowElement = document.createElement("tr")
    tableBodyElement.appendChild(tableRowElement)

    for (var i = 0; i < data.length; i++) {
        var tableData = document.createElement("td")
        var text = document.createTextNode(data[i])
        
        tableRowElement.appendChild(tableData)
        tableData.appendChild(text)
    }

}