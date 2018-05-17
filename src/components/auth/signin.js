// import React and Component from react
// import connect from react-redux
// import redux form and Field from redux-form
// import * as actions from actions

// class Signin extends Component
	// handleFormSubmit taking object with props email and password
		// call action off props this.props.signinUser() passing it object email, password
	// renderAlert helper method
		// simple check if errorMessage exists on this.props
			// if so return
				// div with classname alert alert-danger
					// strong bold component indicating error and error message off this.props	
	// renderField taking object with input, label, type, and meta object with touched and error
		// return
			// div
				// label component holding call to {label} passed in
				// div
					// input component with object spread operator on input, type set to {type}
					// place to render error div with {error} if {touched and error }
	// render
		// const to store fields and password onto this.props using handle submit helper from redux form
		//return 
			// Form component onSubmit set to object with handleSubmit(this.handleFormSubmit) binding to this instance
				// fieldset form-group 
					// field component classname form-control with name type and label for email, component set to call to this.renderField
					// field component classname form-control with name type and label for password, component set to call to this.renderField
				// call to renderAlert()					
				// button action submit classname btn btn-primary with text Sign in

// create mapStateToProps function taking state
	// returns opject with prop errorMessage set to state.auth.error

// export default reduxForm(
	//object with property 
		// Form component set to signin
		// fields to produce array including email, password
	// object with 
		// call to connect(mapStateToProps, actions) and Signin

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form'; 
import * as actions from '../../actions';

class Signin extends Component {
	handleFormSubmit({ email, password }){
		// console.log(email, password);
		// console.log('props are ', this.props);
		// console.log('fields are ', this.props.fields);
		this.props.signinUser({ email, password });
	}
	renderAlert(){
		if(this.props.errorMessage){
			return(
				<div className="alert alert-danger">
					<strong>Woops!</strong> {this.props.errorMessage}
				</div>
			);
		}
	}
	renderField({ input, label, type }){
		return(
			<div className="formField">
				<label>{label}:</label>
				<div>
					<input {...input} type={type}/>	
				</div>
			</div>
		);
	}
	render(){
		const { handleSubmit, fields: { email, password }} = this.props;
		return(
			<div className="signin-container">
				<div className="logo"></div>
				<div className="signin-block centeredComponent">
					<div className="formComponent">
						<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
							<fieldset className="form-group signinFields">
								<div className="benefitsImg">
									<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="100" width="100"></img>
								</div>
								<Field name="email" type="email" component={this.renderField} label="Email" className="form-control" />
								<Field name="password" type="password" component={this.renderField} label="Password" className="form-control" />
							</fieldset>
							{this.renderAlert()}
							<button action="submit" className="btn btn-primary signin-button">Sign in</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { errorMessage: state.auth.error };
}

export default reduxForm(
	{
		form: 'signin',
		fields: ['email', 'password']
	}
)(
	connect(mapStateToProps, actions)(Signin)
);