var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
  favorites: [String],
  marks:[Number]
}, { timestamps: true });

var addressSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pin: Number,
  user: Schema.Types.ObjectId
}, { timestamps: true })