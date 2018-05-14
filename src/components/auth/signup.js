// import React and Component from react
// import connect from react-redux
// import reduxForm and Field from redux-form
// import all actions from actions

// class Signup extends Component
	// render
		// const holding object with properties handleSubmit and fields set to object with props email password and passwordConfirm all set to this.props
		// return
			// Form component 
				// fieldset form-group for email
					// label email
					// Field component classname form-control, component input, name email, give redux control of input to redux form using email prop helper {...email}
				// fieldset form-group for password
					// label password
					// Field component classname form-control, component input, name password, give redux control of input to redux form using password prop helper {...password}
					// use reference to password helper from reduxform to access password.error and render here if there is one
				// fieldset form-group for passwordConfirm
					// label passwordConfirm
					// Field component classname form-control, component input, name passwordConfirm, give redux control of input to redux form using passwordConfirm prop helper {...passwordConfirm}
				// button action submit classname btn btn-primary with text Sign up

// create validate function taking formProps
	// const to store errors object
	// if password and passwordConfirm off of formProps don't match
		// set errors.password to password error message
	// return errors

// export default reduxForm(
	//object with property 
		// form set to signup, name of form 
		// fields to produce array including email, password, and passwordConfirm
		// validate set to validate
	// object with 
		// call to connect() taking () and Signup 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
	renderField({ input, label, type, meta: { touched, error } }){
		return(
			<div>
				<label>{label}:</label>
				<div>
					<input {...input} type={type}/>
					{touched && error && <div className="error">{error}</div>}				
				</div>
			</div>
		);
	}
	render(){
		const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props;
		return(
			<form>
				<fieldset className="form-group">
					<Field name="email" type="email" component={this.renderField} label="Email" className="form-control" />
					<Field name="password" type="password" component={this.renderField} label="Password" className="form-control" />
					<Field name="passwordConfirm" type="password" component={this.renderField} label="Confirm Password" className="form-control" />
				</fieldset>
				<button action="submit" className="btn btn-primary">Sign up</button>
			</form>
		);
	}
}

function validate(formProps){
	console.log('form props are', formProps);
	console.log('email is', formProps.email);
	const errors = {};
	if(formProps.password !== formProps.passwordConfirm){
		errors.password = 'Passwords do not match!' 
	}
	console.log('errors in validate are ', errors);
	return errors;
}

export default reduxForm(
	{
		form: 'signup',
		fields: ['email', 'password', 'passwordConfirm'],
		validate: validate
	}
)(
	connect(null, actions)(Signup)
);