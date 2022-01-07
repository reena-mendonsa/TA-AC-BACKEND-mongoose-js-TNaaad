var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');



//database
mongoose.connect("mongodb://localhost",(err)=>{
    console.log(err ? err:"connected to database");
});

//instantiate the app
var app = express();
 

//middleware
app.use(logger('dev'));

//routes
app.get('/',(req,res) => {
    res.send('welcome');
});

app.get('/users',(req,res)=> {
    res.send('users Page');
});

//error handle middleware
app.use((req,res,next)=>{
    res.send('Page not found');
});

app.listen(3000,()=>{
    console.log('server listening on port 3k');
});