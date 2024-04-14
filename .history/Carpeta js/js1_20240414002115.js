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

btnLeft.addEventListener("click",  moveToLeft());
btnRight.addEventListener("click",  moveToRight());

let operacion=0;
  let  counter=0;


function moveToRight() {
    if(counter>=sliderSection.length-1){
        operacion=0;
        slider.style.transform = `translate(${operacion}%)`;
    }
    else{
    counter ++;
    operacion = operacion + 25;
    slider.style.transform = `translate(${operacion}%)`;
    slider.style.transition= "all ease .6s"
    }
    
}
function moveToLeft(){
    operacion = operacion - 25;
    slider.style.transform = `translate(${operacion}%)`;
}