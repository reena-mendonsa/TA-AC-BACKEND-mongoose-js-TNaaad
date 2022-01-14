var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title:
    { type: String, required: true, unique: true },
  description:
    { type: String, required: true, minlength: 5, maxlength: 20 },
  tags: [String],
  likes: { type: Number, default: 0 },
  author: { type: Schema.Types.ObjectId, ref:'User'},
  comments: { type: Schema.Types.ObjectId, ref:"Comment"}
}, { timestamps: true })

module.exports = mongoose.module('Article', articleSchema);