var express = require("express");
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/app', (err) => {
  console.log(err ? err : "Connected to the database");
});