var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SportsteamSchema = new Schema({
  users: String,
  city: String,
  name: String,
  championships: Number

});

var Sportsteam = mongoose.model('Sportsteam', SportsteamSchema);

module.exports = Sportsteam;
