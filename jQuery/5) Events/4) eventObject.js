$(function() {
    // As you can see, the event object is passed to the event handler function as an argument.

    $( "a" ).click(function(event) {
        // The code below alerts the mouse position at the time of the click and prevents following the link.
        alert(event.pageX);
        event.preventDefault();
    });
});