var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
   
var NoteCategorySchema = new Schema({
	'name' : String,
});

module.exports = mongoose.model('categories', NoteCategorySchema);


