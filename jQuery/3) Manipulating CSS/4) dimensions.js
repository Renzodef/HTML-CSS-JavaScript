$(function() {
    // The width() and height() methods can be used to get and set the width and height of HTML elements.
    $("div").width(300);
    $("div").height(100);
    // The width() and height() methods get and set the dimensions without the padding, borders and margins.
    // The innerWidth() and innerHeight() methods also include the padding.
    // The outerWidth() and outerHeight() methods include the padding and borders.
    var txt = "";
    txt += "width: " + $("div").width() + " ";
    txt += "height: " + $("div").height() + "<br/>";
    txt += "innerWidth: " + $("div").innerWidth() + "  ";
    txt += "innerHeight: " + $("div").innerHeight() + "<br/>";
    txt += "outerWidth: " + $("div").outerWidth() + "  ";
    txt += "outerHeight: " + $("div").outerHeight();   
    $("div").html(txt);
});
