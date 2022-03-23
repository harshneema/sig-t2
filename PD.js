const slides = document.querySelectorAll('.image-list')
const text = document.querySelectorAll('.text')
const nextButton = document.getElementById('frwd')
const prevButton = document.getElementById('bcwd')
let currentSlide = document.querySelector('.current-slide')
let imageIndex = 1 ;
let translateX = 0;

function textvisible(e) {
    console.log("dfg") ;
    console.log(e);
    e.children[1].style.opacity = 1;
    e.children[0].style.opacity = 0.3;
    
}

function textinvisible(e) {
    console.log("dfg") ;
    console.log(e);
    e.children[1].style.opacity = 0;
    e.children[0].style.opacity = 1;
}



nextButton.addEventListener('click', e => {
    if (imageIndex !== 8) {
        imageIndex++;
        translateX -= 622;
    }
    for (let k = 0; k < slides.length; k++) {
        slides[k].style.transform = `translateX(${translateX}px)`;
           }  
})


prevButton.addEventListener('click', e => {
    if (imageIndex !== 1) {
        imageIndex--;
        translateX += 622;
      }
    for (let k = 0; k < slides.length; k++) {
        slides[k].style.transform = `translateX(${translateX}px)`;
           }    
})
