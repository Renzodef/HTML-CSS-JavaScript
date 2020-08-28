var request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "data.txt");
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
	var modify = document.getElementById("update");
	// Edit the inner HTML of the tag with ID update with the text of the data.txt file
    modify.innerHTML = request.responseText;
  }
};
request.send();
