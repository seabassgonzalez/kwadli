// import Rect and Component from react

// class Signin extends Component
	// render
		
// export default reduxForm(configuration)(component) -- object with property form set to name of form, fields to produce including email and password, and Signin as component

import React, { Component } from 'react';

class Signin extends Component {
	render(){

	}
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
})(Signin);