var http = require("http");
var exp = require("express");
var app = exp();

app.use(exp.static('static'));

app.get('/', function(req, res) {
	console.log("received request " + req);
	res.sendFile("static/index.html");
});

app.get('/second', function(req, res) {
	res.send("Error you are on an outdated version of the server");
});

var server = app.listen(8080, function() {
	console.log("Server listening");
});
