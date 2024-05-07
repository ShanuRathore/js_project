let inputvalue = document.querySelector('#cityinput');
let btn = document.querySelector('#add');
let city = document.querySelector('#cityoutput');
let descripOutput = document.querySelector('#description');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');

const apik = "4fd8965bac8059261ec6fb6e74d60470";

function conversion(val) {
    return (val - 273.15).toFixed(2);
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            let nameval = data['name'];
            let desc = data['weather'][0]['description'];
            let tempval = data['main']['temp'];
            let windval = data['wind']['speed'];

            console.log(data);

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${conversion(tempval)}°C</span>`;
            wind.innerHTML = `Wind Speed: <span>${windval}m/s</span>`;
            descripOutput.innerHTML = `Description: <span>${desc}</span>`;
        }
    )
        .catch(err => alert('Wrong City Name'));
});