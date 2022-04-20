const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  role: {type: String},
  phone: {type: Number},
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String,
//     phone:Number,
//     role:String,
// })

// mongoose.model('JanInt',userSchema);
// module.exports = mongoose.model('JanInt')