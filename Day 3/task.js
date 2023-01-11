// 1. Make a function in external JS file, that takes 2 parameters and return sum of them
// (function return the result, don't alert or print inside it), and make a button that when clicked;
// asks the user to enter 2 numbers(prompt), call the sum function, and display the result returned by the function in the console.
function sum() {
    var num1 = prompt('Enter first number:')
    var num2 = prompt('Enter second number:')

    alert("The sum is " + add(num1, num2))
}

function add(x, y) {
    return parseInt(x) + parseInt(y)
}

// 2. Given two numbers, return true if the sum of both numbers is less than100. Otherwise return false.(use ternary operator)
function lessThan100(num1, num2) {
    var sum = num1 + num2

    return sum < 100 ? true : false
}

// 3. Create a function that takes a string and returns it as an integer.
function stringInt(x) {
    return parseInt(x);
}

// 4. Write a JavaScript program to construct the following pattern, using a nested for loop.
function printStarTree() {
    for (var i = 0; i < 5; i++) {
        console.log('*'.repeat(i + 1));
    }
}

// Bonus
// 1. Write a JavaScript function that returns a passed string with letters in alphabetical order.
function sortAlphabet(text) {
    return text.split("").sort().join("");
}