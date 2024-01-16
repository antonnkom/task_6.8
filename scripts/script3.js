// traffic light with one circle
const trafficLightEl = document.querySelector('#traffic_light');
let color = ('black');

trafficLightEl.addEventListener('click', () => {
   if (color === 'black' || color === 'red') {
        color = getColor('green');
    } else if (color === 'green') {
        color = getColor('yellow');
    } else if (color === 'yellow') {
        color = getColor('red');
    }
});

function getColor(color) {
    trafficLightEl.style.background = color;
    return color;
}

// traffic light with three circles
const greenEl = document.querySelector('#green');
const yellowEl = document.querySelector('#yellow');
const redEl = document.querySelector('#red');

addEventListener('click', (e) => {
    if (e.target.nodeName === 'DIV') {
        let id = e.target.getAttribute('id');

        if (id === 'green' || id === 'yellow' || id === 'red') {
            if (greenEl.style.background === '' && yellowEl.style.background === '' && redEl.style.background === '') {
                greenEl.style.background = ('green');
            } else if (greenEl.style.background === 'green') {
                getCircleColor(yellowEl, greenEl, 'yellow');
            } else if (yellowEl.style.background === 'yellow') {
                getCircleColor(redEl, yellowEl, 'red');
            } else if (redEl.style.background === 'red') {
                getCircleColor(greenEl, redEl, 'green');
            }
        }
    }
});

function getCircleColor(elem1, elem2, color) {
    elem1.style.background = color;
    elem2.style.background = '';
}