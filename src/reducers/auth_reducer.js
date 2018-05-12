// to maintain auth state
// export function taking state object and action
	// switch() over action.type
		// case USER_AUTH
			// return object with spread operator on state, and authenticated set to true
	// return state

	export default function(state = {}, action){
		switch(action.type){
			case USER_AUTH: 
				return { ...state, authenticated: true };
			case USER_DEAUTH:
				return { ...state, authenticated: false };
		}
		return state;
	}