const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const message = document.querySelector('#message')

    if(height === '' || height < 0 || isNaN(height))
    {
        results.innerHTML = `Enter a valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        results.innerHTML = `Enter a valid weight ${weight}`
    }
    else
    {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span> ${bmi}</span>`
        if(bmi<18.6)
        {
            message.innerHTML = `<span>You are Under Weight</span>`
        }
        else if(bmi>18.6 && bmi<24.9)
        {
            message.innerHTML = `<span>You are Normal Weight</span>`
        }
        else{
            message.innerHTML = `<span>You are Over Weight</span>`
        }

    }
})