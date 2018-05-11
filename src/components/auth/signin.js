// import Rect and Component from react
// import redux form from redux-form

// class Signin extends Component
	// handleFormSubmit taking email and password
		// log user in
	// render
		// const to store fields and password onto this.props using handle submit helper from redux form
		//return 
			// form with onsubmit handler that calls handleSubmit calling this.handleFormSubmit bound to this instance
				// field set component with classname form-group
					// email label
					//  input taking email helper bootstrap classname form-control
				// field set component with classname form-group
					// password label
					//  input taking password helper spread operator password bootstrap classname form-control
				// button action submit classname btn btn-primary with text Sign in

// export default reduxForm(configuration)(component) -- object with property form set to name of form, fields to produce including email and password, and Signin as component

import React, { Component } from 'react';
import { reduxForm } from 'redux-form'; 

class Signin extends Component {
	handleFormSubmit({ email, password }){
		console.log(email, password);
	}
	render(){
		const { handleSubmit, fields: { email, password }} = this.props;
		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<input {...email} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<input {...password} className="form-control" />
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