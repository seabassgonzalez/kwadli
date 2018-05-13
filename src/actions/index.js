// actions creator file
// import axios from axios
// import browserHistory from react-router
// import USER_AUTH and AUTH_ ERROR type from types

// store root url for api server url

// export function signinUser that takes email and password properties
	// return a function from this action creator instead of just object passing it dispatch method, both made available by thunk to access dispatch
		// submit email, password to server using axios.post() request passing it url we want to post and data to post, {email, password} becomes { email: email, password: password } through es6
			// use .then() promise construct if request is good with a response
				// udpate state to indicate user is authenticated with dispatch() call passing object type USER_AUTH
				// save JWT token by saving it in local storage with setItem the name and where it came from response.data
				// redirect to route '/feature' using browserHistory.push - programmatic route change
			// use .catch() promise construct if request is bad
				// show error by using dispatch() calling authError action creator with an error message

// export function authError taking error to handle and return any error created during auth
	// return object
		// type property set to AUTH_ERROR action type
		// payload set to error

import axios from 'axios';
import { browserHistory } from 'react-router';
import { USER_AUTH, AUTH_ERROR } from './types';	

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, { email, password })
			.then(response => {
				dispatch({ type: USER_AUTH });
				localStorage.setItem('token', response.data.token);
				browserHistory.push('/feature');
			})
			.catch(() => {
				dispatch(authError('Bad Login Information'));
			});
	}
}		

export function authError(error){
	return{ 
		type: AUTH_ERROR,
		payload: error
	};
}