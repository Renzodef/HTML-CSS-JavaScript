/*
Similar to the hide/show methods, jQuery provides the fadeIn/fadeOut methods, 
which fade an element in and out of visibility.
Just like the toggle() method switches between hiding and showing, 
the fadeToggle() method fades in and out.
Another method used for fading is fadeTo(),
which allows fading to a given opacity (value between 0 and 1). 
For example: $("div").fadeTo(1500, 0.7);
*/

$(function() {
    $("p").click(function() {
        $("div").fadeToggle(1000);
    });
});