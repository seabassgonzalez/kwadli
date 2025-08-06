// const User to store imported user model 
// const jwt to store token library
// const config to import config object

// make a function tokenForUser that takes users id and encrypts it into a token
	// create const for time stamp of when token issued
	// return jwt.encode() encrypting user id, referencing object with subject property set to user.id, with config.secret string and issued at time for time stamp (sub and iat both by convention)

// make a function signin taking request response next - user already has email and password auth'd just need to give token - need to access current user model can get from passport done method which makes it available as req.user
	// response send object with property token: call to tokenForUser(req.user)

// export a function signup that takes a request, response, and next for errors
	// store email off the request using req.body
	// store password off the request using req.body

	// check if no email or password passed in
		// respond with status 422 error must provide email and password

	// see if a user with given email exists - use .findOne to search User class looking for property email equal to email from request and a callback for errors and possibly a matching user
		// check if there was en error
			// return next(error)
		// if user with email does exist
			// return error status 422 and error message email in use
		// if user with email does not exist
		// create const user using new instance of User class
			// email set to email from request
			// password set to password from request
		// save record using user.save() passing callback to know when complete takes error
			// if error	
				// return error
			// respond to request indicating the user was created with res.json() passing back a token set to tokenForUser(user)

const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user){
	const timestamp = new Date().getTime();
	console.log('user id in tokenForUser is', user.id);
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next){
	console.log('user in sign in is ', req.user);
	console.log('user id in sign in is ', req.user.id);
	res.send({ 
		token: tokenForUser(req.user),
		id: req.user.id 
	});
}

exports.signup = function(req,res,next){
	const email = req.body.email;
	const password = req.body.password;

	if(!email || !password){
		return res.status(422).send({ error: 'You must provide an email and password' });
	}

	User.findOne({email:email}, function(err, existingUser){
		if(err){
			return next(err);
		}
		if(existingUser){
			return res.status(422).json({ error: 'Email is in use' });
		}
		const user = new User({
			email: email,
			password: password
		});
		user.save(function(err){
			if(err){
				return next(err);
			}
			res.json({ 
				token: tokenForUser(user),
				id: user.id 
			});
		});
	});
}