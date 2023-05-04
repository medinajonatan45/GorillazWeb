// Gallery function**********************
// Variables
let btn_next = document.getElementById("button_next");
let btn_back = document.getElementById("button_back");
let carrusel = document.querySelector(".section__gallery-items");

let figureBox_img = document.querySelector(".section__gallery-items");
let img_1 = document.querySelector(".gallery-figureBox__img--img1");
let img_2 = document.querySelector(".gallery-figureBox__img--img2");
let img_3 = document.querySelector(".gallery-figureBox__img--img3");
let img_4 = document.querySelector(".gallery-figureBox__img--img4");
let img_5 = document.querySelector(".gallery-figureBox__img--img5");
let img_6 = document.querySelector(".gallery-figureBox__img--img6");
let figure_img1 = document.querySelector(".gallery-figureBox--figure-1");
let figure_img2 = document.querySelector(".gallery-figureBox--figure-2");
let figure_img3 = document.querySelector(".gallery-figureBox--figure-3");
let figure_img4 = document.querySelector(".gallery-figureBox--figure-4");
let figure_img5 = document.querySelector(".gallery-figureBox--figure-5");
let figure_img6 = document.querySelector(".gallery-figureBox--figure-6");

// Eventos Zoom
figure_img1.addEventListener("click", ()=>{
    figureBox_img.classList.toggle('activo');
    img_1.classList.toggle('activo');
    img_2.classList.remove('activo');
    img_3.classList.remove('activo');
    img_4.classList.remove('activo');
    img_5.classList.remove('activo');
    img_6.classList.remove('activo');
    figure_img1.classList.toggle('activo');
    figure_img2.classList.remove('activo');
    figure_img3.classList.remove('activo');
    figure_img4.classList.remove('activo');
    figure_img5.classList.remove('activo');
    figure_img6.classList.remove('activo');
});
figure_img2.addEventListener("click", ()=>{
    figureBox_img.classList.toggle('activo');
    img_1.classList.remove('activo');
    img_2.classList.toggle('activo');
    img_3.classList.remove('activo');
    img_4.classList.remove('activo');
    img_5.classList.remove('activo');
    img_6.classList.remove('activo');
    figure_img1.classList.remove('activo');
    figure_img2.classList.toggle('activo');
    figure_img3.classList.remove('activo');
    figure_img4.classList.remove('activo');
    figure_img5.classList.remove('activo');
    figure_img6.classList.remove('activo');
});
figure_img3.addEventListener("click", ()=>{
    figureBox_img.classList.toggle('activo');
    img_1.classList.remove('activo');
    img_2.classList.remove('activo');
    img_3.classList.toggle('activo');
    img_4.classList.remove('activo');
    img_5.classList.remove('activo');
    img_6.classList.remove('activo');
    figure_img1.classList.remove('activo');
    figure_img2.classList.remove('activo');
    figure_img3.classList.toggle('activo');
    figure_img4.classList.remove('activo');
    figure_img5.classList.remove('activo');
    figure_img6.classList.remove('activo');
});
figure_img4.addEventListener("click", ()=>{
    figureBox_img.classList.toggle('activo');
    img_1.classList.remove('activo');
    img_2.classList.remove('activo');
    img_3.classList.remove('activo');
    img_4.classList.toggle('activo');
    img_5.classList.remove('activo');
    img_6.classList.remove('activo');
    figure_img1.classList.remove('activo');
    figure_img2.classList.remove('activo');
    figure_img3.classList.remove('activo');
    figure_img4.classList.toggle('activo');
    figure_img5.classList.remove('activo');
    figure_img6.classList.remove('activo');
});
figure_img5.addEventListener("click", ()=>{
    figureBox_img.classList.toggle('activo');
    img_1.classList.remove('activo');
    img_2.classList.remove('activo');
    img_3.classList.remove('activo');
    img_4.classList.remove('activo');
    img_5.classList.toggle('activo');
    img_6.classList.remove('activo');
    figure_img1.classList.remove('activo');
    figure_img2.classList.remove('activo');
    figure_img3.classList.remove('activo');
    figure_img4.classList.remove('activo');
    figure_img5.classList.toggle('activo');
    figure_img6.classList.remove('activo');
});
figure_img6.addEventListener("click", ()=>{
    figureBox_img.classList.toggle('activo');
    img_1.classList.remove('activo');
    img_2.classList.remove('activo');
    img_3.classList.remove('activo');
    img_4.classList.remove('activo');
    img_5.classList.remove('activo');
    img_6.classList.toggle('activo');
    figure_img1.classList.remove('activo');
    figure_img2.classList.remove('activo');
    figure_img3.classList.remove('activo');
    figure_img4.classList.remove('activo');
    figure_img5.classList.remove('activo');
    figure_img6.classList.toggle('activo');
});

// Eventos desplazamiento carrusel
btn_next.addEventListener("click", ()=>{
    carrusel.scrollLeft = carrusel.scrollLeft + 300;
})
btn_back.addEventListener("click", ()=>{
    carrusel.scrollLeft = carrusel.scrollLeft - 300;
})