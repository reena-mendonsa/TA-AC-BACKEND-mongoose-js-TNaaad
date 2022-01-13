
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
  craetedAt: { type: Date, default: new Date },
  likes: {type: Number, default: 0},
  author: String,
});


module.exports = mongoose.model('Article', articleSchema);