// import React and Component from react
// import Header from header
// import Footer from footer

// export default class App extends Component
	// render
		// return	
			// div 
				// header
				// this.props.children in case passed children

import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

export default class App extends Component {
	render(){
		return (
			<div>
				<Header />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}