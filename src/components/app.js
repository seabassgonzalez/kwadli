// import React and Component from react

// export default class App extends Component
	// render
		// return	
			// div with simple text

import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
	render(){
		return (
			<div>
				<Header />
				Body Content
			</div>
		);
	}
}