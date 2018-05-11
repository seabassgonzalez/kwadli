// import combineReducers from redux
// import reducer from redux-form

// create const rootReducer set to call to combineReducers 
	// set form property of state to reducer

// export default rootReducer

import { combineReducers } from 'redux';
import { reducer } from 'redux-form';

const rootReducer = combineReducers({
  form: reducer
});

export default rootReducer;
