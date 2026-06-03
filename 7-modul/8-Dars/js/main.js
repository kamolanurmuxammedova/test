let formContent = document.querySelector(".form")
let formInput = document.querySelector(".form-input")
let transationBtn = document.querySelector(".transation")
let summa = document.querySelector(".summa")
let usaBtn = document.querySelector(".usa-btn")
let euBtn = document.querySelector(".eu-btn")
let rubBtn = document.querySelector(".rub-btn")
let valyuta = document.querySelector(".valyuta")

usaBtn.addEventListener("click" , function(){
    valyuta.textContent = "$"
}
)
euBtn.addEventListener("click" , function(){
    valyuta.textContent = "Euro"
}
)
rubBtn.addEventListener("click" , function(){
    valyuta.textContent = "Rubl"
}
)

formContent.addEventListener("submit" , function(e){
    e.preventDefault()

    if(valyuta.textContent == "$"){
        result = 12200 * formInput.value
    }else if(valyuta.textContent == "Euro"){
        result = 13400 * formInput.value
    }
    else if(valyuta.textContent == "Rubl"){
        result = 80 * formInput.value
    }

    summa.textContent = result
})