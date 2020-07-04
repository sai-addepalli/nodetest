var http = require("http");
var exp = require("express");
var bodyParser = require("body-parser");
var app = exp();
var Sound = require('node-aplay');

var commentArr = [];

//app.use(bodyParser.urlencoded({extended: false}))
var bodyParserObj = bodyParser.urlencoded({extended: false}))

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


app.post('/submitcomment', bodyParserObj, function(req, res) {
	const body = req.body.Body		
	res.set('Content-Type', 'text/plain');
	console.log(body)
	res.send('post received ${body} ');
});

var server = app.listen(8080, function() {
	console.log("Server listening");
});
