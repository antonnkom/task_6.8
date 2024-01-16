const link = document.querySelector('#change_text_link a');

link.addEventListener('click', (e) => {
    e.preventDefault();
    let text = prompt('Введите текст ссылки', '');
    
    if (text === '' || text === null) {
        text = link.textContent;
    }

    link.textContent = text;
});
