// 1. Simple Calculator.
var screen = document.getElementById("Answer")

function EnterNumber(value) {
    screen.value += value
}

function EnterClear() {
    screen.value = ''
}

function EnterOperator(value) {
    screen.value += value
}

function EnterEqual() {
    var res = eval(screen.value)
    screen.value = res
}