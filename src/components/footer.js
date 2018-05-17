// import React and Component from react
// import connect from react-redux
// import Link from react-router

// class Header extends Component
	// renderNavLinks helper method to decide what links to show depending on authentication
		// if user is authenticated according to authenticated on this.props
			// return
				// li classname nav-item
					// Link component classname nav-link to /signout route, sign out text
		// else
			// return array of two nav links - react expects this to be a list of components with keys
				// li nav-item
					// Link nav-link to /signin route with sign in text, adding dummy key to satisfy key expectation
					// Link nav-link to /signup route with sign up text, adding dummy key to satisfy key expectation
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
import { Link } from 'react-router';

export default class Footer extends Component {
	render(){
		return(
			<nav className="navbar navbar-light">
				<Link to="/" className="navbar-brand">Kwadli</Link>
				<ul className="nav navbar-nav">
					<div className="form-inline" key={1}>
						<li className="nav-item navItems" >
							<Link className="nav-link" to="/about">About</Link>
						</li>
						<li className="nav-item navItems">
							<Link className="nav-link" to="/Contact">Contact</Link>
						</li>
						<li className="nav-item navItems">
							<Link className="nav-link" to="/Terms">Terms</Link>
						</li>
						<li className="nav-item navItems">
							<Link className="nav-link" to="/Privacy">Privacy</Link>
						</li>
						<li className="nav-item navItems">
							<Link className="nav-link" to="/Copyright">Copyright</Link>
						</li>
					</div>
				</ul>
			</nav>
		);
	}
}