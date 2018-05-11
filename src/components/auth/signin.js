// import Rect and Component from react
// import redux form and Field from redux-form

// class Signin extends Component
	// handleFormSubmit taking email and password
		// log user in
	// render
		// const to store fields and password onto this.props using handle submit helper from redux form
		//return 
			// form with onsubmit handler that calls handleSubmit calling this.handleFormSubmit bound to this instance - handleSubmit puts props on fields and passes to handleFormSubmit
				// field set component with classname form-group
					// email label
					//  Field with name taking email as input component with  bootstrap classname form-control
				// field set component with classname form-group
					// password label
					//  Field with name taking password as input component with bootstrap classname form-control
				// button action submit classname btn btn-primary with text Sign in

// export default reduxForm(configuration)(component) -- object with property form set to name of form, fields to produce including email and password, and Signin as component

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; 

class Signin extends Component {
	handleFormSubmit({ email, password }){
		console.log(email, password);
		console.log('props are ', this.props);
		console.log('fields are ', this.props.fields);
	}
	render(){
		const { handleSubmit, fields: { email, password }} = this.props;
		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<Field name="email" component="input" className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<Field name="password" component="input" className="form-control" />
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