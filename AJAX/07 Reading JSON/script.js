var request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "data.json");
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    // JSON.parse is not available in some older browsers
    var items = JSON.parse(request.responseText);
    var output = "<ul>";
    for (var key in items) {
      // Selecting the elements of the field "shortname" of the JSON file
      output += "<li>" + items[key].shortname + "</li>";
    }
    output += "</ul>";
    document.getElementById("update").innerHTML = output;
  }
};
request.send();
