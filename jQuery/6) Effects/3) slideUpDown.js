/*

The slideUp() and slideDown() methods are used to create a sliding effect on elements.
Again, similar to the previous toggle methods, 
the slideToggle() method switches between the sliding effects 
and can take two optional parameters: speed and callback.
*/

$(function () {
    $("p").click(function () {
        $("div").slideToggle(500);
    });
});