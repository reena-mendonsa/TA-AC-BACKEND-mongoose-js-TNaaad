var express = require("express");
var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/apps", (err) => {

   console.log(err ? err : 'Connected to the databasee');
})