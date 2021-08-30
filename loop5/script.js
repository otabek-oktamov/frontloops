'use strict';
const texts = ['design', 'front-end', 'back-end'];

let count = 0;
let index, currentText, letter
function all() { index = 0; currentText = ''; letter = '' }; all()
function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('.auto-complete').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        all()
    }
}
setInterval(() => {
    type()
}, 1000);
