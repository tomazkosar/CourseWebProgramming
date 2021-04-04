var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
   
var NoteItemSchema = new Schema({
	'name' : String,
	'done' : Boolean
}); 

module.exports = mongoose.model('items', NoteItemSchema);


