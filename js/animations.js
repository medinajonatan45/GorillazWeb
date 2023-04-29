// Gallery function**********************
// Variables
let btn_next = document.getElementById("button_next");
let btn_back = document.getElementById("button_back");
let carrusel = document.querySelector(".section__gallery-items");

let img_items = document.querySelector(".section__gallery-items");
let img = document.querySelector(".gallery-figureBox__img");
let figure_img1 = document.querySelector(".gallery-figureBox--figure-1");
let figure_img2 = document.querySelector(".gallery-figureBox--figure-2");
let figure_img3 = document.querySelector(".gallery-figureBox--figure-3");

// Eventos Zoom
figure_img1.addEventListener("click", ()=>{
    img_items.classList.toggle('activo');
    img.classList.toggle('activo');
    figure_img1.classList.toggle('activo');
    figure_img2.classList.remove('activo');
    figure_img3.classList.remove('activo');
});
figure_img2.addEventListener("click", ()=>{
    img_items.classList.toggle('activo');
    figure_img1.classList.remove('activo');
    figure_img2.classList.toggle('activo');
    figure_img3.classList.remove('activo');
});
figure_img3.addEventListener("click", ()=>{
    img_items.classList.toggle('activo');
    figure_img1.classList.remove('activo');
    figure_img2.classList.remove('activo');
    figure_img3.classList.toggle('activo');
});

// Eventos desplazamiento carrusel
btn_next.addEventListener("click", ()=>{
    carrusel.scrollLeft = carrusel.scrollLeft + 300;
})
btn_back.addEventListener("click", ()=>{
    carrusel.scrollLeft = carrusel.scrollLeft - 300;
})