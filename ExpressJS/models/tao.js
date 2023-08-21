const mongoose = require('mongoose');

const taoSchema = new mongoose.Schema({
  name: String,
  age: Number
})

module.exports = mongoose.model('tao', taoSchema)