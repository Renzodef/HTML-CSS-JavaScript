/*
The animate() method lets you animate to a set value, or to a value relative to the current value.
You need to define the CSS properties to be animated as its parameter in JSON format ("key":"value" pairs).
The second parameter defines the speed of the animation.
For example, the following code animates the width property of the div in 1 second to the value 250px.
You can animate any CSS property using the above mentioned syntax, but there is one important thing to remember: 
all property names must be camel-cased when used with the animate() method 
(camelCase is the practice of writing compound words or phrases such that each word or 
abbreviation begins with a capital letter with the first word in lowercase).
You will need to write paddingLeft instead of padding-left, marginRight instead of margin-right, and so on.
*/

$(function() {
    $("div").click(function() {
        $("div").animate({width: '250px'}, 1000);
    });
});