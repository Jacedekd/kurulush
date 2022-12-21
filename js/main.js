let feed_alert = document.querySelector('.feedback__alert');
let feed__Title = feed_alert.childNodes[1].childNodes[3];
let feed__desc = feed_alert.childNodes[1].childNodes[5];

function feedback(title, desc) {
    feed__Title.textContent = title
    feed__desc.textContent = desc
    feed_alert.classList.add('is-active');
    setTimeout(() => {
        feed_alert.classList.remove('is-active');
    }, 7000)
    window.addEventListener('scroll', () => {
        feed_alert.classList.remove('is-active');
    })
}

let select = document.querySelector('#select');
let select2 = document.querySelector('#select');


// select2 = Array.from(select2)
// console.log(select2);
// select2.forEach(e => {
//     e.addEventListener('click', () => {
//         console.log(e);
//     })
// })


let calc_price = document.querySelector('.calc_price span')
let full_Price_P = document.querySelector('.full_Price_P')



let cbox1 = document.querySelector('#cbox1')
let cbox2 = document.querySelector('#cbox2')
let cbox3 = document.querySelector('#cbox3')
let cbox4 = document.querySelector('#cbox4')

let arr = []
arr.push(cbox1, cbox2, cbox3, cbox4)
arr.forEach(e => {

    e.addEventListener('click', () => {


        let value = Number(select.value)
        if (e.checked === true) {
            e.classList.add('active')
        }
        if (e.id === 'cbox1' && e.checked) {

            full_Price_P.textContent = Math.round((value - (value * (10 / 100))) / 120) + '.00$'
            feedback('При первоначальном взносе 10 %', 'В подарок комплект бытовой техники: холодильник, газовая плита, кондиционер, бойлер, стиральная машина')
        }
        if (e.id === 'cbox2' && e.checked) {

            full_Price_P.textContent = Math.round((value - (value * (20 / 100))) / 120) + '.00$'
            feedback('При первоначальном взносе 20 %', 'В подарок комплект бытовой техники и кухонный гарнитур')
        }
        if (e.id === 'cbox3' && e.checked) {
            full_Price_P.textContent = Math.round((value - (value * (30 / 100))) / 120) + '.00$'
            feedback('При первоначальном взносе 30 %', 'Комплект бытовой техники, кухонный гарнитур и надземный паркинг в подарок!!!')
        }
        if (e.id === 'cbox4' && e.checked) {
            full_Price_P.textContent = Math.round(value / 120) + '.00$'
        }

    })
})

select.addEventListener('click', () => {
    let value = Number(select.value)

    calc_price.textContent = value + '$'


    arr.forEach(e => {
        if (e.checked === true) {

            if (e.id === 'cbox4') {
                full_Price_P.textContent = Math.round(value / 120) + '.00$'
            }
            if (e.id === 'cbox1') {
                full_Price_P.textContent = Math.round((value - (value * (10 / 100))) / 120) + '.00$'

            }
            if (e.id === 'cbox2') {
                full_Price_P.textContent = Math.round((value - (value * (20 / 100))) / 120) + '.00$'
            }
            if (e.id === 'cbox3') {
                full_Price_P.textContent = Math.round((value - (value * (30 / 100))) / 120) + '.00$'
            }
        }
    })
})
