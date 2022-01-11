var Article = require('./models/Article')
var User = require('./models/User')
var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/samples', (err) => {
  console.log(err ? err : 'Connected to the database');
});