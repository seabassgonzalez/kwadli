import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router';
import * as actions from '../../actions';

class Signup extends Component {
	handleFormSubmit({ email, password }){
		this.props.signupUser({ email, password });
	}

	renderAlert(){
		if(this.props.errorMessage){
			return(
				<div className="alert alert-danger">
					<strong>Error!</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	renderField({ input, label, type, meta: { touched, error } }){
		return(
			<div className="form-group">
				<label>{label}</label>
				<input 
					{...input} 
					type={type} 
					className="form-control"
					placeholder={`Enter ${label.toLowerCase()}`}
				/>
				{touched && error && <div className="error">{error}</div>}
			</div>
		);
	}
	
	render(){
		const { handleSubmit } = this.props;
		return(
			<div className="signin-container">
				<div className="signin-block">
					<div className="signin-header">
						<h2>Sign Up</h2>
						<p className="signin-subtitle">Join the Kwadli racing community</p>
					</div>
					<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
						<Field 
							name="email" 
							type="email" 
							component={this.renderField} 
							label="Email" 
						/>
						<Field 
							name="password" 
							type="password" 
							component={this.renderField} 
							label="Password" 
						/>
						<Field 
							name="passwordConfirm" 
							type="password" 
							component={this.renderField} 
							label="Confirm Password" 
						/>
						{this.renderAlert()}
						<button 
							type="submit" 
							className="btn btn-primary signin-button btn-block"
						>
							Sign Up
						</button>
						<div className="auth-links">
							<p>Already have an account? <Link to="/signin" className="auth-link">Sign In</Link></p>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

function validate(formProps){
	const errors = {};
	
	if(!formProps.email){
		errors.email = 'Please enter an email';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email)) {
		errors.email = 'Invalid email address';
	}
	
	if(!formProps.password){
		errors.password = 'Please enter a password';
	} else if(formProps.password.length < 6){
		errors.password = 'Password must be at least 6 characters';
	}
	
	if(!formProps.passwordConfirm){
		errors.passwordConfirm = 'Please confirm your password';
	}
	
	if(formProps.password !== formProps.passwordConfirm){
		errors.passwordConfirm = 'Passwords do not match';
	}
	
	return errors;
}

function mapStateToProps(state){
	return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'signup',
	validate
})(connect(mapStateToProps, actions)(Signup));