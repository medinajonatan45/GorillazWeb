let background_album_0 = document.querySelector(".section__album-background--album-0");
let box_album_0 = document.querySelector(".section__album-img--album-0");

box_album_0.addEventListener("mouseover", ()=>{
    background_album_0.classList.toggle("activo");
    document.querySelector(".section__h3--album-0").innerHTML="Gorillaz Discography ©";
    document.querySelector(".section__p--album-0").innerHTML="The discography of British virtual band Gorillaz consists of eight studio albums, three compilation albums, 11 extended plays, one remix album, and 46 singles.";
});
box_album_0.addEventListener("mouseout", ()=>{
    background_album_0.classList.toggle("activo");
    document.querySelector(".section__h3--album-0").innerHTML="";
    document.querySelector(".section__p--album-0").innerHTML="";
})

