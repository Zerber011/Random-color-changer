let cube = document.querySelector('.cube');
let colorId = document.querySelector('#colorId');
let stopBtn = document.querySelector('.stop-btn');
let startBtn = document.querySelector('.start-btn');

let colorChanger;


colorChanger = setInterval(() => {
    randomColor = '#' + Math.random().toString().substring(2, 8);
    cube.style.backgroundColor = randomColor;
    colorId.innerHTML = randomColor;
    stopBtn.style.backgroundColor = randomColor;
}, 1000);



stopBtn.addEventListener('click', () => {
    clearInterval(colorChanger);
});



startBtn.addEventListener('click', () => {
    colorChanger = setInterval(() => {
        const randomColor = '#' + Math.random().toString().substring(2, 8);
        cube.style.backgroundColor = randomColor;
        colorId.innerHTML = randomColor;
        startBtn.style.backgroundColor = randomColor;
    }, 1000);
})