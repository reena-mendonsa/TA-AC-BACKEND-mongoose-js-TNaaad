var express = require("express");
var mongoose = require("mongoose");

mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to Database');
  }
);

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.get("/", (req, res) => {
  res.send("Welcome to the page")
});

app.listen(3000, () => {
  console.log("listening at port 3k");
})
