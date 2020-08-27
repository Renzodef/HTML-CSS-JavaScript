var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	// If the browser is really old and doesn't support XMLHttpRequest
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		console.log(request);
		document.writeln(request.responseText);
	}
}
request.send();
