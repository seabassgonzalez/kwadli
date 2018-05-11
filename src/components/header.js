// import React and Component from react

// class Header extends Component
	// render
		// return
			// nav bootstrap classes navbar navbar-light
				// ul bootstrap classes nav navbar-nav
					// li classname nav-item
						// simple sign in text

// export default Header					

import React, { Component } from 'react';

class Header extends Component {
	render(){
		return(
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						Sign in
					</li>
				</ul>
			</nav>
		);
	}
}

export default Header;