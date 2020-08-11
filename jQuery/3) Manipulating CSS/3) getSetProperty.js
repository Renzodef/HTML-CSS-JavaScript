$(function () {
    // Similar to the html() method, the css() method can be used to get and set CSS property values.
    alert($("p").css("background-color"));
    $("p").css("background-color", "blue");
    // To set multiple CSS properties, the css() method uses JSON syntax.
    $(".multiple").css({"background-color": "violet", "font-size": "300%"});

});