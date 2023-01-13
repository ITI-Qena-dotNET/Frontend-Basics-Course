// 1. Ask the user to enter his Email, and use function strings to check if the Email contains @, and not in the first or last index.
function email() {
    var email = prompt("Enter Email")

    if ((email.charAt(0) != '@' || email.charAt(email.length - 1) != '@') && email.indexOf('@') > 0) {
        console.log(`The email ${email} is valid`)
    }
    else {
        console.error(`The email ${email} is NOT valid`)
    }
}

// 2. Create a function that takes two strings as arguments and 
// returns the number of times the first string(the single character) is found in the second string.
function countCharacter(character, word) {
    var count = 0
    var element

    for (let i = 0; i < word.length; i++) {
        element = word[i];

        if (element == character) {
            count++
        }
    }

    console.log(count)
}

// 3. Fill an array of 3 elements from the user, and apply each of the following mathematical operations on it (+, *, /).
function basicMathOps() {
    var arr = []
    arr[0] = prompt("Enter first number:")
    arr[1] = prompt("Enter second number:")
    arr[2] = prompt("Enter third number:")

    console.log(`The sum of 3 numbers is ${arr[0] + arr[1] + arr[2]}`)
    console.log(`The multiplication of 3 numbers is ${arr[0] * arr[1] * arr[2]}`)
    console.log(`The division of 3 numbers is ${arr[0] / arr[1] / arr[2]}`)
}

// 4. Fill an array (5 numerical values) from the user, Sort it in descending and ascending orders then display the output
function sortAndDisplay() {
    var arr = []

    for (var i = 0; i < 5; i++) {
        arr[i] = prompt(`Enter number ${i + 1}:`)
    }


    var copyArr = []

    for (let i = 0; i < arr.length; i++) {
        copyArr[i] = arr[i]
    }

    var ascendingSorted = copyArr.sort()
    var descendingSorted = arr.sort(function (a, b) { return b - a })

    console.log(ascendingSorted)
    console.log(descendingSorted)
}

// 5. Enter the value of a circle’s radius in order to calculate its area
function getCircleArea() {
    var radius = prompt("Enter radius:")

    alert(`The Area of circle of radius ${radius} is ${Math.PI * Math.pow(radius, 2)}`)
}

// 6. Enter another value to calculate its square root and alert the result
function getSquareRoot() {
    var number = prompt("Enter number:")

    alert(`The square root of ${number} is ${Math.sqrt(number)}`)
}

// 7. Enter an angle to calculate its cos value then display the output
function getCosine() {
    var number = prompt("Enter angle:")

    alert(`The cosine of number ${number} is ${Math.ceil(Math.cos(number) * Math.PI / 180)}`)
}

// Bonus
// 1. Make a function that takes date string as a parameter, and returns the Day name (Saturday, Sunday,…) of the given date.
function GetDayOfDate(dateText) {
    var dateInput = new Date(dateText)
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    console.log(days[dateInput.getDay()])
}

// 2.
function GetBirthday() {
    var colorsMap = new Map()
    colorsMap.set('r', 'red')
    colorsMap.set('g', 'green')
    colorsMap.set('b', 'blue')

    var birthdayText = prompt("Enter your birthday [Format: mm dd yyyy]")
    var colorKey = prompt("Enter your color: (r / g / b)")
    var birthdayInput = new Date(birthdayText)

    if (isNaN(birthdayInput)) {
        throw new Error('birthday format is not valid')
    }

    document.write(`<p style="font-weight: bold;">Current Date: <p onerror="handleException()" style="font-weight: bold; color: ${colorsMap.get(colorKey)}">${new Date()}</p></p>`)
    console.log(birthdayInput)
    return birthdayInput
}

// 3.
function callBirthday() {
    try {
        GetBirthday()
    } catch (error) {
        console.warn("Exception handled")
    }
}

// 4. Try to handle the previous exception using onError Event.
window.onerror = function (errmessage, url, line) {
    console.error('error handled in OnError event')
}