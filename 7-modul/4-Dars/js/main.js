var buyBtn = document.querySelector(".buy-btn");
var cartBtn = document.querySelector(".cart-btn");
var minus = document.querySelector(".minus");
var soni = document.querySelector(".soni");
var plus = document.querySelector(".plus");

buyBtn.addEventListener("click" , function(){
    cartBtn.classList.remove("hidden");
    buyBtn.classList.add("hidden")
})

plus.addEventListener("click" , function(){
    soni.textContent++
})

minus.addEventListener("click" , function(){
    soni.textContent--
})
