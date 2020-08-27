for (var i = 0; i < 1000; i++) {
	var request = new XMLHttpRequest();
	// false means that the request is not asynchronous
	request.open('GET', 'data.txt', false);
	request.send();
	if (request.status===200) {
		console.log(request);
		document.writeln(request.responseText);
	}	
}
