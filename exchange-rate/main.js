const currencyOne = document.getElementById('currency-one')
const currencyTwo = document.getElementById('currency-two')
const amountOne = document.getElementById('amount-one')
const amountTwo = document.getElementById('amount-two')
const rate = document.getElementById('rate')
const swap = document.getElementById('swap')


// Fetch exchange rate API and update DOM
function calc() {
    const currOne = currencyOne.value
    const currTwo = currencyTwo.value
    fetch(`https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/${currOne}`)
        .then(res => res.json())
        .then(data => {
            const connRates = data.conversion_rates[currTwo]
            rate.innerText = `1 ${currOne} = ${connRates} ${currTwo}`
            amountTwo.value = (amountOne.value * connRates).toFixed(2)
        })
}


// Event listeners
currencyOne.addEventListener('change', calc)
amountOne.addEventListener('input', calc)
currencyTwo.addEventListener('change', calc)
amountTwo.addEventListener('input', calc)
swap.addEventListener('click', () => {
    const sw = currencyOne.value
    currencyOne.value = currencyTwo.value
    currencyTwo.value = sw
    calc()
})


calc()