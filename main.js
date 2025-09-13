let btn = document.querySelector('.btn')
let counterArea = document.querySelector('.count-area')
let count = 0

btn.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let rgb = `rgb(${r}, ${g}, ${b})`
  document.body.style.backgroundColor = rgb
    count++
    counterArea.innerHTML = `ფერი შეიცვალა ${count}-ჯერ`
})
