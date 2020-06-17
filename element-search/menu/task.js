'use strict';

const menuLink = Array.from(document.querySelectorAll('.menu__link'))
let getMenuActive;



menuLink.map((element) => {
    element.onclick = () => {
        let list = element.nextElementSibling.classList

        if(list.contains('menu')) {
            getMenuActive = document.querySelector('.menu_active')

            if(list.contains('menu_active')) {
                list.remove('menu_active')
            } 

            else if(getMenuActive) {
                getMenuActive.classList.remove('menu_active')
                list.add('menu_active')
            }
            
            else {
                list.add('menu_active')
            }
        }
        return false
    }
})
