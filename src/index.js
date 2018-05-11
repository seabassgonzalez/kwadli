// import React from react
// import ReactDOM from react-dom
// import Provider from react-redux
// import createStore and applyMimddleware from redux
// import Router components Router Route IndexRoute and browserHistory from react-router

// import App from components/app
// import Signin from components auth signin
// import reducers from reducers

// create const createStoreWithMiddleware set to applyMiddleware() call passing in createStore

// ReactDOM.render
	// provider component with store property set to object callback to createStoreWithMiddleware passing reducers
		// Router with history set to browserHistory
			// app component
				// signin route set to Signin component
	// second argument to .render being location to render to

	
	
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Signin from './components/auth/signin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
    	<Route path="/" component={App}>
    		<Route path="signin" component={Signin} />
    	</Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
	