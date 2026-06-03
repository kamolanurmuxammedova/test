var darkButton = document.querySelector(".dark");
var main = document.querySelector(".main");


darkButton.addEventListener("click", function () {
  main.classList.toggle('dark-mode');
});
