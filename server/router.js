// const authentication to store require for authentication controller
// const to hold passportService from services passport
// const passport to hold passport.js library

// const requireAuth helper that calls passport.authenticate() passing it jwt and specifing session false, used only for cookies
// const requireSignin helper set to passport.authenticate() with local and session false to intercept request

// module.exports function passing it app
	// app.get request for / route passing it requireAuth and a callback req res function
		// response send information message temp dummy info
	// app.post request to /signin route requiring authentication with requireSignin, Authentication.signin
	// app.post request to /signup route with Authentication.signup 
 
const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app){
	app.get('/', requireAuth, function(req, res){
		res.send({ someSecretDetail: 'temporary secret information' });
	});
	app.post('/signin', requireSignin, Authentication.signin);
	app.post('/signup', Authentication.signup);
}