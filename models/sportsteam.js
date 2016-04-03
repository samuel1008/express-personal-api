var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SportsteamSchema = new Schema({
  name: String,
  championships: Number

});

var Sportsteam = mongoose.model('Sportsteam', SportsteamSchema);

module.exports = Sportsteam;
