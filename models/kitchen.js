var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kitchenSchema = new Schema({
    name: String,
    image: String,
    assessment: String,
    information: String,
    difficulty: String,
    time: String,
    ingredients: String,
    steps: String,
    tips: String,
});

module.exports = mongoose.model('Kitchen', kitchenSchema);
