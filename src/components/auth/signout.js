// import React and Component from react
// import connect from react-redux
// import all actions as actions from actions

// class Signout component extends Component
	// use component lifecycle willMount to  from actionssignout user as soon as component about to render
		// call signoutUser() on props from actions
	// render
		// return div with signout message

// export connectected version of signout component tied to actions

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
	componentWillMount(){
		this.props.signoutUser();
	}
	render() { 
		return <div>See you next time</div>;
	}
}

export default connect(null, actions)(Signout);