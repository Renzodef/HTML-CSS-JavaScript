$(function () {
    // jQuery has many useful methods for DOM traversal.
    // The parent() method returns the direct parent element of the selected element.
    var e = $("p").parent();
    e.css("border", "2px solid red");
});