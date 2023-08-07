const images = Array.from(document.querySelectorAll('.image'));
const dots = Array.from(document.querySelectorAll('.dot'))
const nextButton = document.querySelector('.next')
const backButton = document.querySelector('.back')
let currentIndex = 0;

// previous image index

function previousImage(){
    if (currentIndex === 0){
        currentIndex = images.length - 1
        return currentIndex
    }
    currentIndex = currentIndex - 1
    return currentIndex;
}

// next image index

function nextImage(){

    currentIndex = currentIndex + 1 % images.length
    if (currentIndex === images.length){
        currentIndex = 0;
    }
    return currentIndex;
}

// clear slide

function clearSlide(){
    images[currentIndex].style.display = 'none'
    dots[currentIndex].classList.remove('dot-active')
}

// update slide

function updateSlide(){
    images[currentIndex].style.display = 'block'
    dots[currentIndex].classList.add('dot-active')
}

// update dots

function updateDots(target){
    for (let i = 0; i < dots.length; i++){
        if (dots[i] === target){
            return i;
        }
    }
}

// auto-slide

function autoSlide(){
    clearSlide()
    currentIndex = nextImage()
    updateSlide()
}

// button events

function buttonEvents(){

    dots.forEach(dot => dot.addEventListener('click', (event) => {
        if (event.target.classList.contains('dot')){
            clearSlide()
            currentIndex = updateDots(event.target)
            updateSlide()
        }
    }))


    nextButton.addEventListener('click', () => {
        clearSlide()
        currentIndex = nextImage()
        updateSlide()
    });

    backButton.addEventListener('click',() => {
        clearSlide()
        currentIndex = previousImage()
        updateSlide()
    });
}

export{autoSlide, buttonEvents}