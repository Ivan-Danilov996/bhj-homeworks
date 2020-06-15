'use strict'

const clickerCounter = document.getElementById("clicker__counter")
const clickerSpeed = document.getElementById("clicker__speed")
const cookie = document.getElementById("cookie")

let currentTime = Date.now()

cookie.onclick = function() {

    clickerCounter.textContent = (parseInt(clickerCounter.textContent) + 1).toString();

    if(cookie.width === 200){
        cookie.width = 250
    } else {
        cookie.width = 200
    }

    clickerSpeed.textContent = ((Date.now() - currentTime) / 1000) / parseInt(clickerCounter.textContent)
}

