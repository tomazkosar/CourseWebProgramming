var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
	'username' : String,
	'password' : String,
	'name' : String
});

UserSchema.statics.authenticate = function(username, password, callback){
	User.findOne({ username: username})
		.exec(function(err, user){
			if(err){
				return callback(err);
			} else if(!user){
				var err = new Error("User not found");
				err.status = 401;
				return callback(err);
			}
			bcrypt.compare(password, user.password, function(err, result){
				if(result === true){
					return callback(null, user);
				} else{
					return callback();
				}
			});
		});
}

UserSchema.pre('save', function(next) {
	var user = this;

	bcrypt.hash(user.password, SALT_WORK_FACTOR, function(err, hash) {
		if (err) return next(err);
		user.password = hash;
		next();
	});
});

//module.exports = mongoose.model('users', UserSchema);
var User = mongoose.model('users', UserSchema);
module.exports = User;