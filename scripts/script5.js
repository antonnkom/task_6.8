const duplicateFieldEl = document.querySelector('#duplicate_field');
const theForm = document.querySelector('form');
const theText = document.querySelector('#input_text');

theForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let newText = theText.value;
    duplicateFieldEl.textContent = newText;
    theForm.reset();
});