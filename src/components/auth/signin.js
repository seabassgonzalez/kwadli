// import Rect and Component from react
// import redux form from redux-form

// class Signin extends Component
	// render
		// form
			// field set component with classname form-group
				// email label
				//  input bootstrap classname form-control
			// field set component with classname form-group
				// password label
				//  input bootstrap classname form-control
			// button action submit classname btn btn-primary with text Sign in

// export default reduxForm(configuration)(component) -- object with property form set to name of form, fields to produce including email and password, and Signin as component

import React, { Component } from 'react';
import { reduxForm } from 'redux-form'; 

class Signin extends Component {
	render(){
		return(
			<form>
				<fieldset className="form-group">
					<label>Email:</label>
					<input className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<input className="form-control" />
				</fieldset>
				<button action="submit" className="btn btn-primary">Sign in</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
})(Signin);