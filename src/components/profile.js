// import libraries components and actions
// import React and Component from react
// import connect from react-redux
// import * as actions from '../actions';

// create profile class based component
// class profile extends Component
	// use componentWillMount from lifecycle to call immediately before rendering
		// fetchDetail() off props from actions
	// render
		// return	
			// div this is a profile text

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
			<div>
				<div>
					This is a profile
				</div>
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