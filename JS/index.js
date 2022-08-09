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
    startTimer = setInterval(() => {timer()}, 1000)
}

function pause() {
    clearInterval(startTimer)
}

function clear() {
    ss = 0
    mm = 0
    hh = 0
    dd = 0

    countSec.innerHTML = '00'
    countMin.innerHTML = '00'
    countHour.innerHTML = '00'
    countDay.innerHTML = '00'

    clearInterval(startTimer)
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


    countSec.innerHTML = ss < 10 ? '0' + ss : ss
    countMin.innerHTML = mm < 10 ? '0' + mm : mm
    countHour.innerHTML = hh < 10 ? '0' + hh : hh
    countDay.innerHTML = dd < 10 ? '0' + dd : dd
}

startBtn.addEventListener('click', start)
pauseBtn.addEventListener('click', pause)
clearBtn.addEventListener('click', clear)