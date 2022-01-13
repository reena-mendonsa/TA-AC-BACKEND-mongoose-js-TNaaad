
var Address = require('./model/address');
var Article = require('./model/article');
var Users = require('./model/user');
var express = require('express');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/sample", (err) => {
  console.log(err ? err : "Connected to the database");
});