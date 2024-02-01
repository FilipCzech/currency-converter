let amountElement = document.querySelector(".js-amount");
let valueElement = document.querySelector(".js-value");
let formElement = document.querySelector(".js-form");
let sumElement = document.querySelector(".js-sum");

const currencyElement = document.querySelector(".js-currency");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;

    const currency = currencyElement.value;
    let rate;
    switch (currency) {
        case "EUR":
            rate = 4.69;
            break;

        case "USD":
            rate = 4.41;
            break;
    }

    let sum = rate * amount;
    sumElement.innerText = sum.toFixed(2);

});