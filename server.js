var express = require('express');
var fs = require('fs');
var mongo = require('mongoskin');
var db = mongo.db('localhost:27017/banana');

var nodemailer = require('nodemailer');
var rest = require('restler');

var app =  express.createServer();

app.use(express.static(__dirname + '/static'));
app.use(express.bodyParser());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.set('view options', {
      layout: false
});

app.get('/' , function(req, res){
	res.render("index");
});

app.get("/home", function (req, res) {
	res.render("home");
});

app.listen(80);
