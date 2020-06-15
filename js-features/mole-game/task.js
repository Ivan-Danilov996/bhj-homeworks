'use strict';

const holes = document.querySelectorAll('.hole')
const dead = document.getElementById('dead')
const lost = document.getElementById('lost')
console.log(holes)



const hole = Array.from(holes)

hole.map((element)=> {
    element.onclick = () => {
        if(element.className.includes('hole_has-mole')) {
            dead.textContent = (parseInt(dead.textContent) + 1).toString();
            if( parseInt(dead.textContent) == 10) {
                alert('Победа!')
                dead.textContent = 0
                lost.textContent = 0
            }
        } else {
            lost.textContent = (parseInt(lost.textContent) + 1).toString();
            if( parseInt(lost.textContent) == 5) {
                alert('Поражение!')
                dead.textContent = 0
                lost.textContent = 0
            }
        }
    }
})