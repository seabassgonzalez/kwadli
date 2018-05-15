// import React and Component from react
// import connect from react-redux

// export default function passing it the component you want to wrap with the higher order component, referred to as ComposedComponent
	// define class Authentication extending Component
		// specify static contextTypes to access context such as this.context
			// create router set to React.PropTypes.object
		// componentWillMount method to handle authentication check before render, otherwise send them to alternate route
			// check if user not signed in
				// push root route to router
		// componentWillUpdate for whenever component handed new props or be rerendered passing it nextProps
			// check if next version of props isn't authenticated - if user signed out
				// push root route to router
		// render
			// return Compose Component with spread operator on this.props for a place to render in case props are passed
	// mapStateToProps taking state
		// return object with property authenticated set to authenticated boolean off of auth piece of state - state.auth.authenticated
	// return connect(mapStateToProps)(Authentication)

import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){
	class Authentication extends Component{
		static contextTypes = {
			router: React.PropTypes.object
		}
		componentWillMount(){
			if(!this.props.authenticated){
				this.context.router.push('/');
			}
		}
		componentWillUpdate(nextProps){
			if(!nextProps.authenticated){
				this.context.router.push('/');
			}
		}
		render(){
			// console.log('Rendering ', ComposedComponent);
			// console.log('Authenticated?', this.props.authenticated);
			// console.log('Context', this.context);
			return <ComposedComponent {...this.props} />
		}
	}
	function mapStateToProps(state){
		return { authenticated: state.auth.authenticated };
	}
	return connect(mapStateToProps)(Authentication);
}