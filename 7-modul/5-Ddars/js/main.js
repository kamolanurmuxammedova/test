var loading = document.querySelector(".loading");
var header = document.querySelector(".header");

window.addEventListener("load", function(){
    loading.classList.add("hidden");
})


window.addEventListener("scroll", function(){
    if(window.scrollY > 50){
        header.classList.remove("py-[40px]");
        header.classList.add("py-[20px]");
    }else{
        header.classList.add("py-[40px]");
        header.classList.remove("py-[20px]");
    }
})


