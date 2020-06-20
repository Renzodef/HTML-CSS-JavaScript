document.addEventListener('DOMContentLoaded', function () {
    // Interacting with the element with the ID color-change
    document.querySelector('#color-change').onchange = function () {
        // Passing to the box the value of the color choosed
        // So this is an interaction between JavaScript and CSS
        document.querySelector('#box').style.background = this.value;
    };
});