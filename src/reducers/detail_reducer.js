// reducer to maintain some secret detail access off database router
// import FETCH_DETAIL from action types

// export function taking state object, action
	// switch over action types
		// case for FETCH_DETAIL
			// return state with spread operator to maintain it and property someSecretDetail set to detail off action.payload response from server
	// return state

import { FETCH_DETAIL } from '../actions/types';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_DETAIL:
			return { ...state, someSecretDetail: action.payload }
	}
	return state;
}