let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let secs = document.getElementById('secs')

//full screen elements
let full = document.querySelector('.full')
let fullText = document.getElementById('full-exit')


let now = new Date()
let secsTime = now.getSeconds()
let minutesTime = now.getMinutes()
let hoursTime = now.getHours()
console.log(secsTime)
console.log(minutesTime)
console.log(`this is hours ${hoursTime}`)

let secsCounter = ( secsTime * 6 ) + 90
let minutesCounter  = (minutesTime * 6) + 90
let hoursCounter  = (hoursTime * 30) + 90
console.log(hoursCounter)
setInterval(function () {

//live location as for secs
secs.style.rotate = `${secsCounter}deg`
secsCounter += 6

//live location as for minutes
minutes.style.rotate = `${minutesCounter}deg`
if (secsCounter === 360 ) {
    minutesCounter += 6
    secsCounter = 0
}

//live location as for Hours
hours.style.rotate = `${hoursCounter}deg`
if (minutesCounter === 360 ) {
    hoursCounter += 6
    minutesCounter = 0
}

if (hoursCounter >= 360 ) {
    hoursCounter = 0
}
}, 1000)

// Mode Integration
let btn = document.querySelector('button')
let btnContainer = document.querySelector('.mode')
let main = document.getElementById('main')
let clock = document.querySelector('.clock')
let numbers = document.querySelectorAll('ul > li')

btn.addEventListener('click', modeChanger)

function modeChanger() {
    btn.classList.toggle('btn-position-change')
    main.classList.toggle('background-white')
    numbers.forEach(function (number) {
        number.classList.toggle('color-black')
    })
    clock.classList.toggle('black-shadow')
    btnContainer.classList.toggle('mode-white')
    full.classList.toggle('mode-white')
    
}



full.addEventListener('click', function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      fullText.textContent = 'Full screen'

    } else {
        document.documentElement.requestFullscreen();
        fullText.textContent = 'Exit Full screen'
    }
  }
 )

