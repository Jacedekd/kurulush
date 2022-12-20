// let swiperValue = document.querySelector('.sliderValue span');
// let inputSlider = document.querySelector('.field input');

// inputSlider.oninput = (()=> {
//     let value = inputSlider.value;
//     swiperValue.textContent = value
//     swiperValue.style.left = (value/2) + '%';
//     swiperValue.classList.add('show')
// })

// inputSlider.onblur = (() => {
//     swiperValue.classList.remove('show')

// })



let select = document.querySelector('#select');
let select2 = document.querySelector('#select');


// select2 = Array.from(select2)
// console.log(select2);
// select2.forEach(e => {
//     e.addEventListener('click', () => {
//         console.log(e);
//     })
// })



let full_Price_P = document.querySelector('.full_Price_P')

select.addEventListener('click', () => {
    let value = Number(select.value)

    let nemValue = value / 120
    full_Price_P.textContent = nemValue + '$'
})

let cbox1 = document.querySelector('#cbox1')
let cbox2 = document.querySelector('#cbox2')
let cbox3 = document.querySelector('#cbox3')
let cbox4 = document.querySelector('#cbox4')

let arr = []
arr.push(cbox1, cbox2, cbox3, cbox4)
arr.forEach(e => {
    e.addEventListener('click', () => {
      
        let value = Number(select.value)

        if (e.id === 'cbox1' && e.checked) {
                full_Price_P.textContent = (value - (value * (10 / 100))) / 120 + '$'
        }
        if (e.id === 'cbox2' && e.checked) {
            full_Price_P.textContent = (value - (value * (20 / 100))) / 120 + '$'
        }
        if (e.id === 'cbox3' && e.checked) {
            full_Price_P.textContent = (value - (value * (30 / 100))) / 120 + '$'
        }
        if (e.id === 'cbox4' && e.checked) {
            full_Price_P.textContent = value / 120 + '$'
        }
        if (e.id === 'cbox4' && e.checked) {
            full_Price_P.textContent = value / 120 + '$'
        }

    })
})



