// import axios from axios

// store root url for api server url

// export function signinUser that takes email and password properties
	// return a function from this action creator instead of just object passing it dispatch method, both made available by thunk to access dispatch
		// submit email, password to server using axios.post() request passing it url we want to post and data to post, {email, password} becomes { email: email, password: password } through es6
		// if request is good
			// udpate state to indicate user is authenticated
			// save JWT token
			// redirect to route '/feature'
		// if request is bad
			// show error

import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, { email, password });
	}
}		