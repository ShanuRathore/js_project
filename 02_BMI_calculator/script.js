const form = document.querySelector('form');

//this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)

//Note: WHen the form data is submit its value goes in url or in server to avoid or stop that default action

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height==='' || height<0 || isNaN(height) || weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML="Please enter valid values ${height} and ${weight}"
    }
    else{
        const BMI = (weight/((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML = `<span>${BMI}</span>`
    }
});