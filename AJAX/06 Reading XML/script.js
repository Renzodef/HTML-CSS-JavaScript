var request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "data.xml");
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    console.log(
      // Printing in the console the second element with tag "name" of the XML file
      request.responseXML.getElementsByTagName("name")[1].firstChild.nodeValue
    );
    // Selecting the elements with tag "name" of the XML file
    var items = request.responseXML.getElementsByTagName("name");
    var output = "<ul>";
    for (var i = 0; i < items.length; i++) {
      output += "<li>" + items[i].firstChild.nodeValue + "</li>";
    }
    output += "</ul>";
    document.getElementById("update").innerHTML = output;
  }
};
request.send();
