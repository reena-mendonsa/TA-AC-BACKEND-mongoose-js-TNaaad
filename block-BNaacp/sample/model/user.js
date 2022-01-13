var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  userName: { type: String, required: true},
  email: { type: String, lowercase: true, minlength: 5, unique:true },
  sports: [String]
}, { timestamps:true })

var User = mongoose.model("User", userSchema);
module.exports = User;