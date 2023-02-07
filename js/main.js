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

// $.mask.definitions['8']='[9]';
// $(".card__Vizitka__GroupInput").mask("+9(999) 999-9999");


var element = document.querySelector('.card__Vizitka__GroupInput');
var maskOptions = {
    mask: '+{9}(000)000-000-00'
};
var mask = IMask(element, maskOptions);




function loanCalculator(amount, rate, term) {
    const monthlyRate = rate / 100 / 12;
    const monthlyPayment = amount * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), term)));
    return monthlyPayment.toFixed(2);
}

function calculate() {
    let amount = document.getElementById("amount").value;
    let rate = document.getElementById("rate").value;
    let term = document.getElementById("term").value;
    let currency = document.querySelector(".styled-select").value;

    let monthlyPayment = loanCalculator(amount, rate, term);
    monthlyPayment = Math.round(monthlyPayment);
    // monthlyPayment = new Intl.NumberFormat('ru-RU').format(monthlyPayment);

    let countSpan = document.createElement('div')
    let countSpan2 = document.createElement('div')
    countSpan.classList.add('countSpan')
    countSpan2.classList.add('countSpan')
    if (currency === 'Сомы') {
        countSpan.innerHTML = 'сомов'
        countSpan2.innerHTML = 'сомов'
    } 
    else if (currency === 'Доллары') {
        countSpan.innerHTML = 'долларов сша'
        countSpan2.innerHTML = 'долларов сша'
    } 
    else if (currency === 'Рубли') {
        countSpan.innerHTML = 'рублей'
        countSpan2.innerHTML = 'рублей'
    } 
    else if (currency === 'Тенге') {
        countSpan.innerHTML = 'тенге'
        countSpan2.innerHTML = 'тенге'
    }

    document.querySelector(".calculator2__amountRate").innerHTML = new Intl.NumberFormat('ru-RU').format(monthlyPayment);
    document.querySelector(".calculator2__amountRate").append(countSpan)

    let totalCount = monthlyPayment * term;

    document.querySelector(".calculator2__amountTotal").innerHTML = new Intl.NumberFormat('ru-RU').format(totalCount);
    document.querySelector(".calculator2__amountTotal").append(countSpan2)
}

document.querySelector('.calculator2__InfoBtn').addEventListener('click', (e) => {
    e.preventDefault()
    calculate()
})