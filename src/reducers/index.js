// import combineReducers from redux
// import reducer from redux-form
// import authReducer from auth_reducer

// create const rootReducer set to call to combineReducers 
	// set form property of state to reducer
	// auth set to authReducer
// export default rootReducer

import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  form: reducer,
  auth: authReducer
});

export default rootReducer;
