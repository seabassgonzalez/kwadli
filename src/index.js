// import React from react
// import ReactDOM from react-dom
// import Provider from react-redux
// import createStore and applyMimddleware from redux
// import Router components Router Route IndexRoute and browserHistory from react-router
// import reduxThunk from redux-thunk to access dispatch as middleware

// import App from components/app
// import Signin from components auth signin
// import Signout from components auth signout
// import Signup from components auth signup
// import reducers from reducers

// create const createStoreWithMiddleware set to applyMiddleware() call passing in reduxThunk middleware and createStore

// ReactDOM.render
	// provider component with store property set to object callback to createStoreWithMiddleware passing reducers
		// Router with history set to browserHistory
			// app component
				// signin route set to Signin component when visited
				// signout route renders Signout component when visited
				// signup route renders Signout component when visited
	// second argument to .render being location to render to

	
	
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
    	<Route path="/" component={App}>
    		<Route path="signin" component={Signin} />
    		<Route path="signout" component={Signout} />
    		<Route path="signup" component={Signup} />
    	</Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
	