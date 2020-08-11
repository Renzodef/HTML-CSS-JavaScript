$(function () {
    // The parent() method can only traverse a single level up the DOM tree.
    // To get all ancestors of the selected element you can use the parents() method. 
    var e = $("p").parents();
    e.css("border", "2px solid red");
});