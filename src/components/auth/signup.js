// import React and Component from react
// import connect from react-redux
// import reduxForm and Field from redux-form
// import all actions from actions

// class Signup extends Component
	// handleFormSubmit taking email and password off props in object
		// call signupUser from props with object containing email and password
	// renderField taking object with input, label, type, and meta object with touched and error
		// return
			// div
				// label component holding call to {label} passed in
				// div
					// input component with object spread operator on input, type set to {type}
					// place to render error div with {error} if {touched and error }
	// render
		// return
			// const holding object with properties handleSubmit and fields set to object with props email password and passwordConfirm all set to this.props
			// Form component onSubmit set to object with handleSubmit(this.handleFormSubmit) binding to this instance
				// fieldset form-group 
					// field component classname form-control with name type and label for email, component set to call to this.renderField
					// field component classname form-control with name type and label for password, component set to call to this.renderField
					// field component classname form-control with name type and label for passwordConfirm, component set to call to this.renderField
				// button action submit classname btn btn-primary with text Sign up

// create validate function taking formProps
	// const to store errors object
	// if no email passed to formProps
		// errors.email set to no email message
	// if no password passed to formProps
		// errors.password set to no password email
	// if no passwordConfirm passed to formProps
		// errors.passwordConfirm set to no password confirm message
	// if password and passwordConfirm off of formProps don't match
		// set errors.password to password error message
	// return errors

// export default reduxForm(
	//object with property 
		// Form component set to signup
		// fields to produce array including email, password, and passwordConfirm
		// validate set to validate
	// object with 
		// call to connect(null, actions) and Signup 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
	handleFormSubmit({ email, password }){
		// console.log('props are ', this.props);
		this.props.signupUser({ email, password });
	}
	renderAlert(){
		if(this.props.errorMessage){
			return(
				<div className="alert alert-danger">
					<strong>Woops! </strong>{this.props.errorMessage}
				</div>
			);
		}
	}
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
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<Field name="email" type="email" component={this.renderField} label="Email" className="form-control" />
					<Field name="password" type="password" component={this.renderField} label="Password" className="form-control" />
					<Field name="passwordConfirm" type="password" component={this.renderField} label="Confirm Password" className="form-control" />
				</fieldset>
				{this.renderAlert()}
				<button action="submit" className="btn btn-primary">Sign up</button>
			</form>
		);
	}
}

function validate(formProps){
	// console.log('form props are', formProps);
	// console.log('email is', formProps.email);	
	const errors = {};
	if(!formProps.email){
		errors.email = 'Please enter an email';
	}
	if(!formProps.password){
		errors.password = 'Please enter a password';
	}
	if(!formProps.passwordConfirm){
		errors.passwordConfirm = 'Please enter a password confirmation';
	}
	if(formProps.password !== formProps.passwordConfirm){
		errors.password = 'Passwords do not match!'; 
	}
	// console.log('errors in validate are ', errors);
	return errors;
}

function mapStateToProps(state){
	return { errorMessage: state.auth.error };
}

export default reduxForm(
	{
		form: 'signup',
		fields: ['email', 'password', 'passwordConfirm'],
		validate: validate
	}
)(
	connect(mapStateToProps, actions)(Signup)
);