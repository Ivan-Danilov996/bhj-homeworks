'use strict'

const fontSize = Array.from(document.querySelectorAll('.font-size'))
const book = document.querySelector('.book')

let index;

fontSize.forEach((element)=> {
    element.addEventListener('click', (event) => {
        event.preventDefault()
        if( !(element.classList.contains('font-size_active')) ) {
            Array.from(element.parentElement.children).forEach((childElement) => {
                childElement.classList.remove('font-size_active')
            })
            element.classList.add('font-size_active')
            if(element.classList.contains('font-size_small')) {
                book.classList.remove('book_fs-big')
                book.classList.add('book_fs-small')
            }
            if(element.classList.contains('font-size_big')) {
                book.classList.remove('book_fs-small')
                book.classList.add('book_fs-big')
            }
            if(Array.from(element.classList).length < 3) {
                book.classList.remove('book_fs-big')
                book.classList.remove('book_fs-small')
            }
        }
    })
}) 

const bookControlColor = Array.from(document.querySelectorAll('.book__control_color .color'))
const bookControlBackground = Array.from(document.querySelectorAll('.book__control_background .color'))

bookControlColor.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault()
        if(!(element.classList.contains('color_active'))) {
            Array.from(element.parentElement.children).forEach((childElement) => {
                childElement.classList.remove('color_active')
            })
        }
        element.classList.add('color_active')
        if(element.dataset.color) {
            book.style.color = element.dataset.color
        } else {
            book.style.color = 'black'
        }
        
    })
})

bookControlBackground.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault()
        if(!(element.classList.contains('color_active'))) {
            Array.from(element.parentElement.children).forEach((childElement) => {
                childElement.classList.remove('color_active')
            })
        }
        element.classList.add('color_active')
        if(element.dataset.color) {
            book.style.backgroundColor = element.dataset.color
        } else {
            book.style.backgroundColor = 'white'
        }
    })
})
