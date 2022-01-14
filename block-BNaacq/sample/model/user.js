const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, match: /@/ },
    age: { type: Number, default: 18 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);