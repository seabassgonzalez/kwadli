// import libraries components and actions
// import React and Component from react
// import connect from react-redux
// import * as actions from '../actions';

// create profile class based component
// class profile extends Component
	// use componentWillMount from lifecycle to call immediately before rendering
		// fetchDetail() off props from actions
	// renderDetail helper function
		// checks if there is a secret detail on props
			// if so returns 
				// div
					// strong element containing this.props.someSecretDetail
	// render
		// return	
			// div 
				// renderDetail()
				// renderProfile()

// connect actions to props on profile component
// export default connect() passing it null for mapStateToProps and actions, and () Profile component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Profile extends Component {
	componentWillMount(){
		this.props.fetchDetail();
	}
	renderDetail(){
		if(this.props.someSecretDetail){
			return(
				<div className="">
					<strong>{this.props.someSecretDetail}</strong>
				</div>
			);
		}
	}
	render(){
		console.log('someSecretDetail is ', this.props.someSecretDetail);
		return(
			<div className="centeredComponent">
				{this.renderDetail()}
				
			</div>
			
		);
	}
}

function mapStateToProps(state){
	return{
		someSecretDetail: state.detail.someSecretDetail
	};
}

export default connect(mapStateToProps, actions)(Profile);