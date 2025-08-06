import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form'; 
import { Link } from 'react-router';
import * as actions from '../../actions';

class Signin extends Component {
	handleFormSubmit({ email, password }){
		this.props.signinUser({ email, password });
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
						<h2>Sign In</h2>
						<p className="signin-subtitle">Welcome back to Kwadli</p>
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
						{this.renderAlert()}
						<button 
							type="submit" 
							className="btn btn-primary signin-button btn-block"
						>
							Sign In
						</button>
						<div className="auth-links">
							<p>Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link></p>
							<Link to="/forgot-password" className="auth-link">Forgot Password?</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

function validate(values){
	const errors = {};
	
	if(!values.email){
		errors.email = 'Please enter your email';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	
	if(!values.password){
		errors.password = 'Please enter your password';
	}
	
	return errors;
}

function mapStateToProps(state){
	return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'signin',
	validate
})(connect(mapStateToProps, actions)(Signin));