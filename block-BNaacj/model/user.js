var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    email: { type:String, lowercase: true, trim: true, match: /@/},
    age: Number,
    favorites: [String],
    marks: [Number],
    password: { type:String, minlength:5, maxlength:15},
    createdAt: {type:Date, default:Date.now()}
  },
  { timestamps: true }
);