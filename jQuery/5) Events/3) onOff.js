$(function () {
    // Another way to handle events in jQuery is by using the on() method.
    // The on() method is used to attach an event to the selected element.
    /*
    The on() method is useful for binding the same handler function to multiple events.
    You can provide multiple event names separated by spaces as the first argument.
    For example, you could use the same event handler for the click and dblclick events.
    */
    $("p").on("click", function () {
        alert("clicked");
        // You can remove event handlers using the off() method.
        $("p").off("click");
    });

});