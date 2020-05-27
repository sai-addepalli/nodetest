var http = require("http");
var exp = require("express");
var app = exp();
var Sound = require('node-aplay');


app.get('/', function(req, res) {
	console.log("received request " + req);
	res.sendFile("index.html", {root: "./static"});
});

app.get('/second', function(req, res) {
	console.log("received request for second page");
	res.sendFile("second.html", {root: "./static"});
});


app.get('/Reaper16', function(req, res) {
	res.sendFile("Reaper16.wav", {root: "./resources"});
});

var server = app.listen(8080, function() {
	console.log("Server listening");
});
