const emSize = document.querySelector('.em')
const remSize = document.querySelector('.rem')
const html = document.querySelector('html')
const container = document.querySelector('div.container')
const emSpan = document.querySelector('.em span')
const remSpan = document.querySelector('.rem span')

emSpan.textContent = window.getComputedStyle(emSize).fontSize
remSpan.textContent = window.getComputedStyle(remSpan).fontSize
const containerSize = window.getComputedStyle(container).fontSize
const htmlSize = window.getComputedStyle(html).fontSize

container.style.background = 'lightblue'
html.style.background = 'lightyellow'
