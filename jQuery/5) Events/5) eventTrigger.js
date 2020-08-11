$(function() {
    $("div").click(function () {
        alert("Clicked!");
    });
    // We can also trigger events programmatically using the trigger() method. 
    // For example, you can trigger a click event without the user actually clicking on an element.
    // The trigger() method cannot be used to mimic native browser events,
    // such as clicking on a file input box or an anchor tag.
    // Only events in the jQuery event system can be handled.
    $("div").trigger("click");
});