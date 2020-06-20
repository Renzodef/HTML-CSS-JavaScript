function getJSON(response) {
    let data = response.json();
    return data
}

function getCurrencyRate(currency) {

    let url = "https://api.exchangeratesapi.io/latest?symbols=" + currency;

    fetch(url)
        .then(getJSON)
        .then(data => {
            let rate = Object.values(data.rates)[0];
            document.querySelector("#exchange-results").innerHTML = `1.00 Euro corresponds to ${rate} ${currency}`;
        })
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#Currency').onchange = function () {
        currency = this.value;
        getCurrencyRate(currency)
    };
});