let countSec = document.getElementById('countSec')
let countMin = document.getElementById('countMin')
let countHour = document.getElementById('countHour')
let countDay = document.getElementById('countDay')

const startBtn = document.getElementById('startBtn')
const pauseBtn = document.getElementById('pauseBtn')
const clearBtn = document.getElementById('clearBtn')


let ss = 0
let mm = 0
let hh = 0
let dd = 0
let startTimer;


function start() {
    startTimer = setInterval(() => {timer()}, 1)
}

function pause() {
    clearInterval(startTimer)
}

function clear() {
    clearInterval(startTimer)

    countSec.innerHTML = '00'
    countMin.innerHTML = '00'
    countHour.innerHTML = '00'
    countDay.innerHTML = '00'
}

function timer() {
    ss++

    if (ss == 60) {
        ss = 0
        mm++
    } else if (mm == 60) {
        mm = 0
        hh++
    } else if (hh == 60) {
        hh = 0
        dd++
    }

    countSec.innerHTML = ss
    countMin.innerHTML = mm
    countHour.innerHTML = hh
    countDay.innerHTML = dd
}

startBtn.addEventListener('click', start)
pauseBtn.addEventListener('click', pause)
clearBtn.addEventListener('click', clear)