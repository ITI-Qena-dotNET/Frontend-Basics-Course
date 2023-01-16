// 1- Make a button that display the current date and time in local format on the page
function printCurrentDate() {
    console.log(new Date().toLocaleDateString())
}

// 2- Make a button that on its onClick event opens new advertising window after 3 seconds, and write long paragraphs on it.
// Also, make another button that closes this page.
// (Note that the browser may block the opening of the new window; make sure that you allow this page to open popups in your browser).
var id

function openNewWindow() {
    setTimeout(function () {
        id = open("www.google.com")
        id.document.write(`<pre>
        <button onclick="window.close()">Close</button>
        
        Random Text here....        
        </pre>`)
    }, 3000)
}

// 3- Write a regular expression that matches only an even number. Numbers will be presented as strings.
function regexEven() {
    var numberText = prompt("Enter number") 

    // Even Regex
    var regex = /^\d*[02468]$/

    if (regex.test(numberText)) {
        console.log(`The number ${numberText} is Even`)
    }
    else {
        console.log(`The number ${numberText} is Odd`)
    }
}

// 4- Write a script that reads from the user his info; validates and displays it with a welcoming message with today’s date
// Use coloring format according to user’s choice. The user has to chooseeither red, green or blue color, take his choice via prompt
function formRegex() {
    var name = prompt("Enter name")
    var nameValidation = checkInput(name, /[a-zA-Z]/)
    var phoneNumber = prompt("Enter Phone Number")
    var phoneValidation = checkInput(phoneNumber, /[0-9]{8}/)
    var mobileNumber = prompt("Enter Mobile Number")
    var mobileValidation = checkInput(mobileNumber, /^(01)(0|1|2|5)[0-9]{8}$/)
    var email = prompt("Enter Email")
    var emailValidation = checkInput(email, /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)

    var color = prompt("Enter Color (red, green, blue)")
    
    if (nameValidation && phoneValidation && mobileValidation && emailValidation) {
        console.log("All Data is valid")

        document.write("<h1>Entering user info</h1><hr />")
        document.write(`<p style="color: ${color};">Welcome Dear guest ${name}</p>`)
        document.write(`<p style="color: ${color};">Your telephone number is  ${phoneNumber}</p>`)
        document.write(`<p style="color: ${color};">Your mobile number is ${mobileNumber}</p>`)
        document.write(`<p style="color: ${color};">Your email address is ${email}</p>`)

        var currentDate = new Date()
        document.write(`<p style="color: ${color};">Today is ${currentDate.getDate()}</p>`)
        document.write(`<p style="color: ${color};">We Are in month ${currentDate.getMonth() + 1}</p>`)
        document.write(`<p style="color: ${color};">and year ${currentDate.getFullYear()}</p>`)
        document.write(`<p style="color: ${color};">Today is ${currentDate.toLocaleDateString()}</p>`)
    }
    else {
        console.error("Some Data is invalid")
    }
}

function checkInput(text, regexPattern) {
    if (regexPattern.test(text)) {
        console.log(`${text} is valid`)
        return true
    }

    console.warn(`${text} is invalid`)
    return false
}

// 5- Create an array of objects that hold student name along with his degree
// (Each element of the array is an object has 2 properties: Name and Degree).
function students() {
    var studentsArr = [{ name: "Shady", Degree: 10 }, { name: "Ahmed", Degree: 50 }, { name: "Mohamed", Degree: 95 }]
    console.log(studentsArr)
    
    // a- Find student Name, who got degree between 90 and 100 [Use find()].
    var studentsWithDegreeBetween = studentsArr.find(function (st) { return st.Degree >= 90 && st.Degree <= 100 })
    console.log(studentsWithDegreeBetween)

    // b- Print students names, who got a degree less than 60 [Use filter()].
    var studentsWithDegreeLess = studentsArr.filter(function (st) { return st.Degree < 60 })
    console.log(studentsWithDegreeLess)

    // c- Add a new student to the array [Use push()],()], and then use for…in to print all elements of the array.
    var newStudent = { name: "Hany", Degree: 78 }
    studentsArr.push(newStudent)

    console.log("Students after adding new one")
    for (var s in studentsArr) {
        console.log(`Student Name: ${studentsArr[s].name} - Degree ${studentsArr[s].Degree}`);
    }

    // d- Remove the last student of the array [Use pop()], and then use for…of to print all elements of the array.
    studentsArr.pop()

    console.log("Students after removing last one")
    for (var s of studentsArr) {
        console.log(`Student Name: ${s["name"]} - Degree ${s.Degree}`);
    }

    // e- Sort the array alphabetically based on the student name
    studentsArr.sort(function (a, b) { return a.name.localeCompare(b.name) })
    console.log("Students after sorting alphabetically by name")
    console.log(studentsArr)

    // f- Use splice() function to add 2 new students after the second element of the array [Bonus].
    studentsArr.splice(2, 0, { name: "Amira", Degree: 70 })
    studentsArr.splice(2, 0, { name: "Walaa", Degree: 55 })
    console.log("Students after adding two new after second element")
    console.log(studentsArr)

    // g- Use splice() function to remove 1 student after the third element in the array [Bonus].
    studentsArr.splice(3, 1)
    console.log("Students after removing one after third element")
    console.log(studentsArr)
}
