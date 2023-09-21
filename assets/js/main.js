
let inputName = document.querySelector('.name')
let error = document.querySelector('.error')
let error2 = document.querySelector('.error2')
let inputYear = document.querySelector('.year')

let submit = document.querySelector('.btn')
submit.removeAttribute("disabled", "disabled")

let isError = false
let isError2 = false

inputName.addEventListener('change', function() {
    if (inputName.value.length < 2) {
        inputName.style.border = '1px solid red'
        error.innerHTML = 'Не менее 2-x символов'
        isError = true
    } else {
        inputName.style.border = '1px solid green'
        error.innerHTML = ''
        isError = false
    }
})
inputYear.addEventListener('change', function(){
        if (inputYear.value.length < 4) {
            inputYear.style.border = '1px solid red'
            error2.innerHTML = 'Не менее 4-x символов'
            isError2 = true
        } else if (2023 - +inputYear.value < 18){
            inputYear.style.border = '1px solid red'
            error2.innerHTML = 'Вам еще нет 18 лет'
            isError2 = true
        } else {
            inputYear.style.border = '1px solid green'
            error2.innerHTML = ''
            isError2 = false
        }
})

let link = document.querySelector('.href')

submit.addEventListener('click', function(event){
    event.preventDefault()
    if (inputName.value == '' && inputYear.value == '' ){
        console.log('jhjh')
        error.innerHTML = 'Заполните поле'
        error2.innerHTML = 'Заполните поле'
    }else if(inputName.value == ''){
        error.innerHTML = 'Заполните поле'
    }else if(inputYear.value == ''){
        error2.innerHTML = 'Заполните поле'
    }
    else if (isError==false && isError2==false){
        inputName.setAttribute("disabled", "disabled")
        inputYear.setAttribute("disabled", "disabled")
        link.innerHTML = 'https://club.z-go.ru/'
    }
})
    
    
    
    