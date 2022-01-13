var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var addressSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pinCode: Number,
  user: { type: Schema.Types.ObjectId, ref: "user" },
  state: { type: String, required: true },
  city: {type: String, required: true}
}, { timestamps: true })

module.exports = mongoose.model('Address', addressSchema)