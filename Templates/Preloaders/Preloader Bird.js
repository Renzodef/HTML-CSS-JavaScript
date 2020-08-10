// After 1 seconds the .wrapper div will fade out in 3 seconds
// and the .box div will fade in in 5 seconds
$(document).ready(function () {
    setTimeout(function () {
        $('.wrapper').fadeOut(3000);
        $('.box').fadeIn(5000);
    }, 1000);
});