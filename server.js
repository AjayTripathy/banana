var express = require('express');
var fs = require('fs');
var mongo = require('mongoskin');
var db = mongo.db('localhost:27017/banana');

var nodemailer = require('nodemailer');
var rest = require('restler');

var passport = require('passport') , FacebookStrategy = require('passport-facebook').Strategy;

var Users = db.collection('user');


passport.use(new FacebookStrategy({
    clientID: '254514314669541',
    clientSecret: '6b5be69ef3216d9908838c0477b0f503',
    callbackURL: 'home'
  },
  function(accessToken, refreshToken, profile, done){
    console.log('callback called');
  }
));

var app =  express.createServer();



app.use(express.static(__dirname + '/static'));
app.use(express.bodyParser());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.set('view options', {
      layout: false
});

app.get('/auth' , passport.authenticate('facebook')  )
app.get('/home' , function(req, res){
res.send('hi');

})
app.get('/' , function(req, res){
  res.send('cheese');
});
app.get('failure', function(req, res){
  console.log('you done goofed')
})

app.listen(80);
