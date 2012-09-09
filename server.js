var express = require('express');
var fs = require('fs');
var mongo = require('mongoskin');
var db = mongo.db('localhost:27017/rice');

var patientInfo = db.collection('patientInfo');

var nodemailer = require('nodemailer');
var rest = require('restler');


var app =  express.createServer();

var familyStatus = db.collection('familyStatus');

var crypto = require('crypto');
var hash = require('node_hash');

app.use(express.static(__dirname + '/static'));
app.use(express.bodyParser());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.set('view options', {
      layout: false
});

app.get('/' , function(req, res){
  console.log("hello")
})

app.listen(8080);
