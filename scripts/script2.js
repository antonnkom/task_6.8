addEventListener('click', (e) => {
    if (e.target.nodeName === 'P') {
        let id = e.target.getAttribute('id');

        if (id === 'console_log') {
            alert('Метод console.log() выводит сообщение в web-консоль');
        } else if (id === 'alert') {
            alert('Метод alert() служит для вывода в браузере предупреждающего модального окна с некоторым сообщением и кнопкой "ОК"');
        } else if (id === 'prompt') {
            alert('Метод prompt() используется для получения данных от пользователя web-страницы. Выводит диалоговое окно, в котором пользователь может ввести текстовые данные');
        }
    }
});