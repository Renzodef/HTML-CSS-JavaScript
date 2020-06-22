// After 1 seconds the .preloader div will fade out in 2 seconds
// and the .box div will fade in in 3 seconds
$(document).ready(function () {
    setTimeout(function () {
        $('.preloader').fadeOut(2000);
        $('.box').fadeIn(3000);
    }, 1000);
});