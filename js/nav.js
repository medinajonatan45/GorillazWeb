let btn = document.querySelector(".header__button");
let nav = document.querySelector(".nav");

btn.addEventListener("click", function(){
    nav.classList.toggle("activo");
});