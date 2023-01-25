// 1. 
var draggedElement
var score = 1

function dragStart(element) {
    draggedElement = element
}

function drop(element) {
    if (draggedElement.id == 'A' || draggedElement.id == 'a') {
        element.appendChild(draggedElement)
        element.style.backgroundColor = 'blue'
        sessionStorage.setItem('score', score++)
    } else {
        console.warn("this element is not 'A'")
        element.style.backgroundColor = 'red'
    }
}

// 2.
document.getElementById("path4151-4-06-8-0-2").addEventListener('mouseover', function (event) {
    console.log('Hovered on eye')
})

document.getElementById("path4153-74").addEventListener('mouseover', function (event) {
    console.log('Hovered on nose')
})

document.getElementById("path13039-5-2-9").addEventListener('mouseover', function (event) {
    console.log('Hovered on mouth')
})
document.getElementById("path4151-4-06-1-6").addEventListener('mouseover', function (event) {
    console.log('Hovered on eye')
})

document.getElementById("path10037-0-8-7").addEventListener('mouseover', function (event) {
    console.log('Hovered on ear')
})

document.getElementById("face-svg").childNodes
    .forEach(elem => {
        elem.addEventListener('mouseenter', function (event) {
            elem.style.fill = "red"
            console.log(`The highlighted part is ${elem.id}`);
        })

        elem.addEventListener('mouseleave', function (event) {
            elem.style.fill = "#dcb67a"
        })
    })

// 3.
var image = document.getElementById("imageSmiley")
var canvas = document.getElementById("canv")
var ctx = canvas.getContext('2d')

window.onload = function () {
    ctx.drawImage(image, 10, 10)
}

function changefacetosad() {
    image.setAttribute("src", "images/sad.jpg")
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
}

function changefacetohappy() {
    image.setAttribute("src", "images/smiley.png")
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
}

// 4.
var canvas = document.getElementById('drawing-canvas');
var ctx = canvas.getContext('2d');
resize();

// last known position
var pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', setPosition);
canvas.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
}

function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

function draw(e) {
    ctx.lineCap = 'round';

    if (e.buttons === 1) { // Left Click
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
    } else if (e.buttons === 2) { // Right Click
        ctx.lineWidth = 15;
        ctx.strokeStyle = 'white';
    } else {
        return;
    }

    ctx.beginPath();

    ctx.moveTo(pos.x, pos.y); // from
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to

    ctx.stroke();
}

