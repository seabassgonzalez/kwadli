// import React and Component from react
// import connect from react-redux
// import Link from react-router

// class Header extends Component
	// renderNavLinks helper method to decide what links to show depending on authentication
		// if user is authenticated according to authenticated on this.props
			// show link to sign out
		// else
			// show links to sign in or sign up
	// render
		// return
			// nav bootstrap classes navbar navbar-light
				// Link tag back to root route with className navbar-brand, text for home 
				// ul bootstrap classes nav navbar-nav
					// call to renderNavLinks helper method

// mapStateToProps function taking state
	// return
		// authenticated set to authenticated property on state -- whether or not user is authenticated

// export default connect()(Header)					

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
	renderNavLinks(){
		if(this.props.authenticated){
			return(
				<li className="nav-item">
					<Link className="nav-link" to="/signout">Sign Out</Link>
				</li>
			);
		}else{
			return[
				<li className="nav-item">
					<Link>Sign In</Link>
				</li>,
				<li className="nav-item">
					<Link>Sign Up</Link>
				</li>
			];
		}
	}
	render(){
		return(
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					{this.renderNavLinks()}
				</ul>
			</nav>
		);
	}
}

function mapStateToProps(state){
	return {
		authenticated: state.auth.authenticated
	};
}

export default connect()(Header);