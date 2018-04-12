var express = require('express');
var app = express();
var axios = require('axios');

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');

  next();
});

app.use('/', express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use('/assets', express.static('assets'));

app.listen(process.env.PORT || 8080);
