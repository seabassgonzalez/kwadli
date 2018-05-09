// import combineReducers from redux

// create const rootReducer set to call to combineReducers 
	// dummy state set to (state = {} )=> state

// export default rootReducer

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
