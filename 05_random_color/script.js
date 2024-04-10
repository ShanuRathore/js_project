//Generate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;

const startChangingColor = function () {

    if (!intervalId) {      //intervalId == null
        intervalId= setInterval(changeBackground, 1000);
    }
   
    function changeBackground() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

if (document.querySelector('#start')) {
    document.querySelector('#start').addEventListener('click', startChangingColor);
}

if (document.querySelector('#stop')) {
    document.querySelector('#stop').addEventListener('click', stopChangingColor);
}
