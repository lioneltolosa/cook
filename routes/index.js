var express = require('express');
var app = express();

var Kitchen = require('../models/kitchen');

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = app;