// actions creator file
// import axios from axios
// import browserHistory from react-router
// import USER_AUTH AUTH_ ERROR USER_DEAUTH FETCH_DETAIL type from types

// store root url for api server url

// export function signinUser that takes email and password properties from form
	// return a function from this action creator instead of just object passing it dispatch method, both made available by thunk to access dispatch
		// submit email, password to server using axios.post() request passing it url we want to post and data to post, {email, password} becomes { email: email, password: password } through es6
			// use .then() promise construct if request is good with a response
				// udpate state to indicate user is authenticated with dispatch() call passing object type USER_AUTH
				// save JWT token by saving it in local storage with setItem the name and where it came from response.data
				// redirect to route '/feature' using browserHistory.push - programmatic route change
			// use .catch() promise construct if request is bad
				// show error by using dispatch() calling authError action creator with an error message

// export function signupUser that takes email and password properties from form
	// return call to function(dispatch)
		// axios.post() to root url/signup route passing it email and password
			// use .then() promise if request is good
				// dispatch() with object property type set to AUTH_USER action type
				// save token from response.data using localStorage.setItem()
				// use browserHistory.push() to send user to /feature route
			// use .catch() for error
				// take response and call dispatch(authError(error))

// export function authError taking error to handle and return any error created during auth
	// return object
		// type property set to AUTH_ERROR action type
		// payload set to error

// export function signoutUser
	// delete token on local storage by calling localStorage.remoteItem() passing it 'token'
	// return UNAUTH_USER action type

// export function fetchDetail action creator to access protected info on server
	// return function passing it dispatch
		// call axios.get() passing it ROOT_URL
			// use js promise .then() taking response fat arrow function
				// use dispatch() passing it an object
					// type prop set to FETCH_DETAIL action type
					// payload set to action.payload.data.someSecretDetail from server

import axios from 'axios';
import { browserHistory } from 'react-router';
import { USER_AUTH, AUTH_ERROR, USER_DEAUTH, FETCH_DETAIL, FETCH_USER } from './types';	

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, { email, password })
			.then(response => {
				dispatch({ type: USER_AUTH });
				console.log('user id in token in signin response is ', response.data.id);	
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('id', response.data.id);
				browserHistory.push('/profile');
			})
			.catch(() => {
				dispatch(authError('Bad Login Information'));
			});
	}
}		

export function signupUser({ email, password }){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signup`, { email, password })
			.then(response => {
				console.log('response is ', response);
				console.log('token in response is ', response.data.token);
				console.log('user id in response is ', response.data.id);
				dispatch({ type: USER_AUTH });
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('id', response.data.id);
				browserHistory.push('/profile');
			})
			.catch(response =>{
				//console.log('response is ', response);
				//console.log('response response is ', response.response);
				dispatch(authError(response.response.data.error));
			});
	}
}

export function authError(error){
	return{ 
		type: AUTH_ERROR,
		payload: error
	};
}

export function signoutUser(){
	localStorage.removeItem('token');
	return {
		type: USER_DEAUTH
	};
}

export function fetchDetail(){
	return function(dispatch){
		axios.get(ROOT_URL, {
			headers: { authorization: localStorage.getItem('token') }
		})
			.then(response => {
			 	console.log('response in fetchDetail is ', response);
			 	console.log('response.data is ', response.data);
				dispatch({
					type: FETCH_DETAIL,
					payload: response.data.someSecretDetail
				});
			});
	}
}

export function fetchUsers(){

};