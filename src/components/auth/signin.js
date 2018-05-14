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
				// call to renderAlert()					
				// button action submit classname btn btn-primary with text Sign in

// create mapStateToProps function taking state
	// returns opject with prop errorMessage set to state.auth.error

// export default reduxForm(
	//object with property 
		// form set to signin, name of form 
		// fields to produce array including email and password
	// object with 
		// call to connect() taking (mapStateToProps, actions) and Signin

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form'; 
import * as actions from '../../actions';

class Signin extends Component {
	handleFormSubmit({ email, password }){
		console.log(email, password);
		console.log('props are ', this.props);
		console.log('fields are ', this.props.fields);
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
					<Field name="password" type="password" component="input" className="form-control" />
				</fieldset>
				{this.renderAlert()}
				<button action="submit" className="btn btn-primary">Sign in</button>
			</form>
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
	})(
		connect(mapStateToProps, actions)(Signin)
	);