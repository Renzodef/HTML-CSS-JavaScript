/*
By default, jQuery comes with queue functionality for animations.
This means that if you write multiple animate() calls one after another, 
jQuery creates an "internal" queue for these method calls. Then it runs the animate calls one-by-one.
*/

$(function () {
    var div = $("div");
    div.animate({
        opacity: 1
    });
    div.animate({
        height: '+=100px',
        width: '+=100px',
        top: '+=100px'
    }, 500);
    div.animate({
        height: '-=100px',
        width: '-=100px',
        left: '+=100px'
    }, 500);
    div.animate({
        height: '+=100px',
        width: '+=100px',
        top: '-=100px'
    }, 500);
    div.animate({
        height: '-=100px',
        width: '-=100px',
        left: '-=100px'
    }, 500);
    div.animate({
        opacity: 0.5
    });
});