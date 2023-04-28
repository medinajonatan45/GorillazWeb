let btn = document.querySelector(".header__button");
let nav = document.querySelector(".nav");

btn.addEventListener("click", function(){
    nav.classList.toggle("activo");
});

// Gallery function
let figure_img1 = document.querySelector(".gallery-figureBox--figure-1");
let figure_img2 = document.querySelector(".gallery-figureBox--figure-2");
let figure_img3 = document.querySelector(".gallery-figureBox--figure-3");

figure_img1.addEventListener("click", ()=>{
    figure_img1.classList.toggle('activo');
    figure_img2.classList.remove('activo');
    figure_img3.classList.remove('activo');
});
figure_img2.addEventListener("click", ()=>{
    figure_img1.classList.remove('activo');
    figure_img2.classList.toggle('activo');
    figure_img3.classList.remove('activo');
});
figure_img3.addEventListener("click", ()=>{
    figure_img1.classList.remove('activo');
    figure_img2.classList.remove('activo');
    figure_img3.classList.toggle('activo');
});