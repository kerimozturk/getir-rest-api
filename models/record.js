var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recordSchema = new Schema({
  createdAt    : Date,
  counts       : Array,
  key          : String,
  value        : String

});

var record = mongoose.model('record', recordSchema)

module.exports = record;
