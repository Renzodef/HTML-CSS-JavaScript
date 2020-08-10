$(function () {
    // append() inserts content at the end of the selected elements.
    // prepend() inserts content at the beginning of the selected elements.
    $("#demo").prepend("Hello, ");
    $("#demo").append(" Renzo");

    // Creating new contents
    var a = $("<p></p>").html("<i>Some Title</i>");
    var b = $("<p></p>").html("<b>Welcome</b>");

    //Adding the new contents
    // after() inserts content after the selected elements.
    // before() inserts content before the selected elements.
    $("#demo2").before(a);
    $("#demo2").after(b);
});