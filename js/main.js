const images = document.querySelectorAll('.slider_line  img')
const sliderLine = document.querySelector('.slider_line')

let count = -1
let width

function init() {
    console.log('resize')
    width = document.querySelector('.slider').clientWidth;
    sliderLine.style.width = width * images.length + 'px'
    images.forEach(item => {
        item.style.width = width + 'px'
        item.style.height = 'auto'
    })
}

sliderLine.addEventListener('click', () => {
    count++
    if (count > images.length - 1) {
        count = 0
    }
    rollSlider()
})

function rollSlider() {
    sliderLine.style.left = -count * width + 'px'
}

function roll() {
    let event = new Event('click')
    sliderLine.dispatchEvent(event);
}

// setInterval(roll, 5000)
window.addEventListener('resize', init)
