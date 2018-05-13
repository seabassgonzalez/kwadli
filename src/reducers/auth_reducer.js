// to maintain auth state

// imprt USER_AUTH, USER_DEAUTH, and AUTH_ERROR from actions types

// export function taking state object and action
	// switch() over action.type
		// case USER_AUTH
			// return object with spread operator on state, and authenticated set to true
		// case USER_DEAUTH
			// return object with spread operator on state, authenticated set to false			
		// case AUTH_ERROR
			// return object with spread on state, error set to action
	// return state

import { USER_AUTH, USER_DEAUTH, AUTH_ERROR } from '../actions/types';

export default function(state = {}, action){
	switch(action.type){
		case USER_AUTH: 
			return { ...state, authenticated: true };
		case USER_DEAUTH:
			return { ...state, authenticated: false };
		case AUTH_ERROR: 
			return { ...state, error: action.payload };
	}
	return state;
}