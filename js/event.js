// option 2
function makeaRed() {
    document.body.style.backgroundColor = 'red'
}
// option 3
const makeBlueBtn = document.getElementById('make_blue')
makeBlueBtn.onclick = makeBlue
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}
// Option 4

const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink)
function makePink() {
    document.body.style.backgroundColor = 'pink'
}
// option 4 sup
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green'
})
// option final 
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod'
})