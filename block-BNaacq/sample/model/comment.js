var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    article: { type: Schema.Types.ObjectId, ref: 'Article' },
  },
  { timestamps: true }
);

module.exports = mongoose.module('Comment', commentSchema);