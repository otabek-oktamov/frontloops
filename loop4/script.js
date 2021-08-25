'use strict';
const btnSubmit = document.querySelector('#btn-submit');
const btnBack = document.querySelector('#btn-back');
const step2 = document.querySelector('#step2');
const step3 = document.querySelector('#step3');
const content = document.querySelector('#content')

btnSubmit.addEventListener('click', () => {
    if (btnSubmit.value == 'Submit title') submitTitle()
    else if (btnSubmit.value == 'Submit description') submitDescription()
})
btnBack.addEventListener('click', () => {
    if (btnSubmit.value == 'Submit description') {
        btnBack.style.display = 'none';
        btnSubmit.value = 'Submit title';
        step2.checked = false;
        step2.disabled = false;
        content.textContent = 'Choose title content'
    } else if (btnSubmit.value == 'Yes go Ahead') {
        btnBack.value = 'Back';
        btnSubmit.value = 'Submit description';
        step3.checked = false;
        content.textContent = 'Choose description content'
        step3.disabled = false;
    }
})

step2.addEventListener('click', () => {
    if (btnSubmit.value == 'Submit title') submitTitle()
})
step3.addEventListener('click', () => {
    if (btnSubmit.value == 'Submit description') submitDescription()
})

function submitDescription() {
    btnSubmit.value = 'Yes go Ahead';
    btnBack.value = 'No,go back';
    step3.checked = true;
    content.textContent == 'Are you happy now?'
    step3.disabled = true
}
function submitTitle() {
    btnBack.style.display = 'inline-block';
    btnSubmit.value = 'Submit description';
    step2.checked = true
    step3.disabled = false;
    step2.disabled = true;
    content.textContent = 'Choose description content'
}