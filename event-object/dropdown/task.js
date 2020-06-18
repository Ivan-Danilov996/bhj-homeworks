'use strict';

const dropdownValue = document.querySelector('.dropdown__value')
const dropdownList = document.querySelector('.dropdown__list')
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'))

function removeClassList() {
    dropdownList.classList.remove('dropdown__list_active')
}


dropdownValue.addEventListener('click', () => {
    if (dropdownList.classList.contains('dropdown__list_active')) {
        removeClassList()
    } else {
        dropdownList.classList.add('dropdown__list_active')
    }
})

dropdownItem.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownValue.textContent = item.firstElementChild.textContent;
        removeClassList()
    })
})



