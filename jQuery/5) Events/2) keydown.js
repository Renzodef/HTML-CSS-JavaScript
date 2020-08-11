$(function() {
    // This will occurr when you write in the input bar and press Enter
    $("#name").keydown(function() {
        $("#msg").html($("#name").val());
    });
});