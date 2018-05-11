// import React and Component from react
// import connect from react
// import redux form and Field from redux-form
// import * as actions from actions

// class Signin extends Component
	// handleFormSubmit taking object with props email and password
		// call action off props this.props.signinUser() passing it object email, password
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

// export default reduxForm(configuration)(component) -- object with property form set to signin name of form, fields to produce array including email and password, second argument mapStateToProps not using yet so null, actions to access imported actions on props, and Signin as component

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

export default reduxForm(
	{
		form: 'signin',
		fields: ['email', 'password']
	})(
		connect(null, actions)(Signin)
	);