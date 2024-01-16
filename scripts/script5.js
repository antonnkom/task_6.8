const duplicateFieldEl = document.querySelector('#duplicate_field');
const theForm = document.querySelector('form');
const theText = document.querySelector('#input_text');

theText.addEventListener('keyup', () => {
    duplicateFieldEl.textContent = theText.value;
});

theForm.addEventListener('submit', (e) => {
    e.preventDefault();

    duplicateFieldEl.textContent = '';
    console.log(theText.value)
    theForm.reset();
});