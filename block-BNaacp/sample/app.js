// Requiring THe Packages
const express = require('express');
const mongoose = require('mongoose');

// Requiring The Models
const User = require('./model/user');

// Connecting To MongoDB By Mongoose
mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to Database');
  }
);

// Initializing The Server
let app = express();

// Middlewares
//1. In-built
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/assets'));

//2. Third Party

//3. Custom

// Routes
app.post('/users', (req, res, next) => {
  var data = req.body;
  console.log(data);
  User.create(data, (err, user) => {
    if (err) return next(err);
    res.json(user);
  });
});

app.get('/users', (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.json({ users: users });
  });
});

// find takes first parameter as empty object in form of query parameter.

app.get('/users/:userName', (req, res, next) => {
  var userName = req.params.userName;
  User.findOne({ userName }, (err, user) => {
    if (err) return next(err);
    res.json({ user:user });
  });
});
// findOne takes params as an object as first argument

app.get("/users/:id", (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.json(user);
  })
})

// findById takes params directly as an first argument


app.put('/users', (req, res, next) => {
  User.updateMany(req.body, { new: true }, (err, updatedUser) => {
    if (err) return next(err);
    res.json(updatedUser);
  });
});

app.put('/users/:userName', (req, res, next) => {
  var userName = req.params.userName;
  User.updateOne({ userName },req.body, { new: true }, (err, updatedUser) => {
    if (err) return next(err);
    res.json(updatedUser);
  });
});

app.put("/users/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    if (err) return next(err);
    res.json(updatedUser)
  })
})

app.delete("/user/:id", (req, res, next) => {
  User.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
    if (err) return next(err);
    res.send(`${deletedProduct.userName} was deleted`)
  })
});

app.delete('/users/:userName', (req, res, next) => {
  var userName = req.params.userName;
  User.findOneAndDelete({userName}, (err, deletedProduct) => {
    if (err) return next(err);
    res.send(`${deletedProduct.userName} was deleted by another method`);
  });
});

// error

app.use((req, res) => {
  res.send('Error: 404 , Page not found')
})

// listener

app.listen(3000, () => {
  console.log('Server is listening on port 3k');
});