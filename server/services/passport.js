// const passport to require passport
// const User to hold models user
// const config to hold config file with client secret
// const JwtStrategy to hold passport-jwt .strategy
// const ExtractJwt to hold passport-jwt .ExtractJwt/
// const LocalStrategy to hold passport-local library

// create const for local options set to object with usernameField set to email string -- local strategy expects a username so just specifying where to find an equivalent on the email property of the request
// create local strategy to authenticate user with email and password, then can go on to another route handler that will give them jwt token
// const localLogin = new LocalStrategy() passing it local options and a call back with email password done
	// verify email and password exists by searching through User class, supply callback taking error and user
		// if error
			// return early with error object done(err)
		// if no user
			// return done passing null and false
		// compare passwords is 'password' equal to user.password

// setup options for JWT Strategy
// const jwtOptions where can specify where to look on request to find key for strategy
	// jwtFromRequest extracted fromHeader 'authorization' to find key
	// secretOrKey to hold config.secret to decode 

// create JWT Strategy
// const jwtLogin set to new JwtStrategy() passing it jwtOptions and a callback taking payload and done
	// see if the user id in the payload exists in db using User class .findById() passing it payload.sub and a callback with error and user
		// if error
			// return error and false, no user
		// if user
			// call done(null, user)
		// call user.comparePassword from schema with password and callback to handle err and isMatch
			// if error
				// return early with error
			// if isn't a match
				// return null, false
			// return 
				// null, user

// tell passport to use this strategy
// tell passport to use localLogin

const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done){
	User.findOne({ email: email }, function(err, user){
		if(err){
			return done(err);
		}
		if(!user){
			return done(null, false);
		}
		user.comparePassword(password, function(err, isMatch){
			if(err){
				return done(err);
			}
			if(!isMatch){
				return done(null, false);
			}
			return done(null, user);
		});
	});
 });

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'), 
	secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
	User.findById(payload.sub, function(err, user){
		if(err){
			return done(err, false);
		}
		if(user){
			done(null, user);
		}else{
			done(null, false);
		}
	});
});

passport.use(jwtLogin);
passport.use(localLogin);