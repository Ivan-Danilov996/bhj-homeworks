'use strict'

const sliderArrows = Array.from(document.querySelectorAll('.slider__arrow'))
const sliderItems = Array.from(document.querySelectorAll('.slider__item '))
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'))


let indexItem = 0;
sliderDots[indexItem].classList.add('slider__dot_active')


function sliderAdd() {
    sliderDots[indexItem].classList.add('slider__dot_active')
    sliderItems[indexItem].classList.add('slider__item_active')
}

function sliderRemove() {
    sliderDots[indexItem].classList.remove('slider__dot_active')
    sliderItems[indexItem].classList.remove('slider__item_active')
}

sliderArrows.map((arrow) => {
    arrow.onclick = () => {
        if(arrow.classList.contains('slider__arrow_next')) {
            if(indexItem != sliderItems.length - 1) {
                sliderRemove()
                indexItem++
                sliderAdd()
            } else {
                sliderRemove()
                indexItem = 0
                sliderAdd()
            }
        }
        if(arrow.classList.contains('slider__arrow_prev')) {
            if(indexItem != 0) {
                sliderRemove()
                indexItem--
                sliderAdd()
            } else {
                sliderRemove()
                indexItem = sliderItems.length - 1
                sliderAdd()
            }
        }
    }
})

sliderDots.map((dot) => {
    dot.onclick = () => {
        sliderRemove()
        indexItem = sliderDots.indexOf(dot)
        sliderAdd()
    }
})
