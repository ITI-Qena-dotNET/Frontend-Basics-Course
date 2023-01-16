// 4- Apply different styles over a paragraph according to checked radio button.
// Implement the required functions in an external js file to let TextStyle.html works properly

var paragraph = document.getElementById("PAR")

function ChangeFont(newFontFamily) {
    paragraph.style.fontFamily = newFontFamily
}

function ChangeAlign(newAlign) {
    paragraph.style.textAlign = newAlign
}

function ChangeHeight(newHeight) {
    paragraph.style.lineHeight = newHeight
}

function ChangeLSpace(newLSpace) {
    paragraph.style.letterSpacing = newLSpace
}

function ChangeIndent(newTextIndent) {
    paragraph.style.textIndent = newTextIndent
}

function ChangeTransform(newTransform) {
    paragraph.style.textTransform = newTransform
}

function ChangeDecorate(newDecorate) {
    paragraph.style.textDecoration = newDecorate
}

function ChangeBorder(newBorder) {
    paragraph.style.border = newBorder
}

function ChangeBorderColor(newBorderColor) {
    paragraph.style.borderColor = newBorderColor
}