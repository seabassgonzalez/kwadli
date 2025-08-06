// create const mongoose to hold require mongoose
// create const Schema to pull Schema off of mongoose
// create const bcrypt to import bcrypt password encryption

// Define model
// create const userSchema that's a new Schema
	// email set to String type, but wrap in object and additional property to ensure user uniquenes, and another lowercase set to true to make sure all usernames unique
	// password set to String type
	// callsign set to String
	// chapters set to [];

// Make an On Save Hook to encrypt password
// call .pre() on userSchema passing it save and function taking next -- will run before saving a model
	// const user set to this instance of user model
	// brcypt.genSalt 10 and function taking error and salt -- to generate a salt and wait for it to complete before running callback
		// handle error if error
			// return next (error)
		// bcrypt.hash() passing it user.password salt null and error handling callback -- to encrypt password
			// if error
				// return next(error)
			// user.password = hash -- to overwrite plaintext password with resulting encrypted hash password
			// next

// create method comparePassword on userSchema.methods so that every user has access, pass it possiblePassword and a callback
	// use bcrypt compare() method passing it possiblePassword, this.password, and a function taking error and isMatch
		// if error
			// return callback(error)
		// callback(null, isMatch)

// Create the model class
// create const ModelClass set to mongoose.model() passing it user and userSchema

// Export the model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: String, 
	callsign: String,
	chapters: []
});

userSchema.pre('save', function(next){
	const user = this;
	bcrypt.genSalt(10, function(err, salt){
		if(err){
			return next(err);
		}
		bcrypt.hash(user.password, salt, null, function(err, hash){
			if(err){
				return next(err);
			}
			user.password = hash;
			next();
		});
	});
});

userSchema.methods.comparePassword = function(possiblePassword, callback){
	bcrypt.compare(possiblePassword, this.password, function(err, isMatch){
		if(err){
			return callback(err);
		}
		callback(null, isMatch);
	});
}

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;