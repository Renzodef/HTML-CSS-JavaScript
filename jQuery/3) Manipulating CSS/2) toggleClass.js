$(function () {
    $("button").click(function () {
        // The toggleClass() method toggles between adding/removing classes from the selected elements, 
        // meaning that if the specified class exists for the element,
        // it is removed, and if it does not exist, it is added.
        $("p").toggleClass("red");
    });
});