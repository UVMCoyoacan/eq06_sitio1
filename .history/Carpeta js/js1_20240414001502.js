function redirigirIndex() {
    window.location.href = '../index.html';
}
function redirigirTerminos() {
    window.location.href = '../terminos.html';
}

const btnLeft=document.querySelector(".btn-left"), 
    btnRight=document.querySelector(".btn-right"),
    slider=document.querySelector("#slider"),
    sliderSection=document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e=>moveToLeft())
btnRight.addEventListener("click", e=>moveToRight())

let operacion=0,
    counter=0;


    function moveToRight() {
    slider.style.transform="translate(-33.3%)"
    }
function moveToLeft(){
    operacion = operacion - 25;
    slider.style.transform = `translate(${operacion}%)`;
}