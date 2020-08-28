$.getJSON("data.json", function (data) {
  var output = "<ul>";
  // Same as for each but with jQuery
  $.each(data, function (_key, val) {
    output += "<li>" + val.name + "</li>";
  });
  output += "</ul>";
  $("#update").append(output);
});
