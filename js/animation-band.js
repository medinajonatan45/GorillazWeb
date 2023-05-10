let background_1 = document.querySelector(".section__background--member-1");
let background_2 = document.querySelector(".section__background--member-2");
let background_3 = document.querySelector(".section__background--member-3");
let background_4 = document.querySelector(".section__background--member-4");

background_1.addEventListener("mouseover", function(){
    background_1.classList.add("activo")
});
background_1.addEventListener("mouseout", function(){
    background_1.classList.remove("activo")
});

background_2.addEventListener("mouseover", function(){
    background_2.classList.add("activo")
});
background_2.addEventListener("mouseout", function(){
    background_2.classList.remove("activo")
});

background_3.addEventListener("mouseover", function(){
    background_3.classList.add("activo")
});
background_3.addEventListener("mouseout", function(){
    background_3.classList.remove("activo")
});

background_4.addEventListener("mouseover", function(){
    background_4.classList.add("activo")
});
background_4.addEventListener("mouseout", function(){
    background_4.classList.remove("activo")
});
