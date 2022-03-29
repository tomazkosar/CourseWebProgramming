var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
   
var NoteItemSchema = new Schema({
	'name' : String,
	'done' : Boolean,
	'category' : String,
	'username' : String
}); 

module.exports = mongoose.model('items', NoteItemSchema);


