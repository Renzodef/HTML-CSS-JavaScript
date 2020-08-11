/*
jQuery has some easy-to-implement effects to create animations.
The hide() and show() methods are used to hide and show the selected elements.
The toggle() method is used to toggle between hiding and showing elements.
The hide/show/toggle methods can take an optional argument, 
speed, which specifies the animation speed in milliseconds.
The hide/show/toggle methods can also take a second optional parameter callback,
which is a function to be executed after the animation completes.
*/

$(function () {
    $("p").click(function () {
        $("div").toggle(1000);
    });
});