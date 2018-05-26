// import React and Component from react

// export default class profile extends Component
	// render
		// return	
			// div welcome

import React, { Component } from 'react';

export default class Home extends Component {
	render(){
		return(
			<div>
				<div className="jumbotron jumbotron-fluid">
					<div className="centeredComponent jumbotronText">
						<h1>Manage Your Video Transmissions</h1>
						<div className="innerJumbotronText">
							<h6>Less Channel Stomping Means Less Crashing,</h6>
							<h6> Fewer Flyaways, & Happier Pilots</h6>
						</div>
						<div className="centeredComponent buttonContainer">
							<p><a className="btn btn-primary btn-lg invite-button" href="#" role="button">Get Started</a></p>
						</div>
					</div>
				</div>
				<div className="container-fluid centeredComponent">
					<h3>Take Your FPV Drone Racing to the Next Level</h3>
				</div>
				<div className="container benefits centeredComponent">
					<div className="benefitsItem">
						<div className="benefitsImg">
							<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="200" width="200"></img>
						</div>
						<h4>Grow the Hobby</h4>
						<p>Kwadli transforms groups of drone racers into organized Drone Racing Chapters by organizing members and creating a community around our event planning software.</p>
					</div>
					<div className="benefitsItem">
						<div className="benefitsImg">
							<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="200" width="200"></img>
						</div>
						<h4>Local and National Races</h4>
						<p>Our global network of Chapters provides the foundation for our Regional Series. Earn your position at local events across the nation.</p>
					</div>
					<div className="benefitsItem">
						<div className="benefitsImg">
							<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="200" width="200"></img>
						</div>
						<h4>Avoid Channel Stomping</h4>
						<p>Kwadli provides proprietary software for managing and sharing your Flight session transmission frequencies. Our simple map tool helps prevent dreaded channel stomping.</p>
					</div>
				</div>
				<div className="container-fluid centeredComponent communityInvite benefitsItem">
					<h3>Ready to Join the Community?</h3>
					<p><a className="btn btn-primary btn-lg invite-button" href="#" role="button">Learn more</a></p>
				</div>
				<div className="container-fluid features">
					<div className="featuresItem">
						<div className="featuresItemText">
							<div>
								<h4>vTx Map Tool</h4>
							</div>
							<div>
								<p>Share your location and broadcasting frequency on our easy to use Google Map tool. Know what channels are safe to use and avoid others stomping on your frequency while you fly.</p>
							</div>
						</div>
						<div className="featuresItemImg">
							<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="300" width="300"></img>
						</div>
					</div>
					<div className="featuresItem">
						<div className="featuresItemImg">
							<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="300" width="300"></img>
						</div>
						<div className="featuresItemText">
							<div>
								<h4>Chapters Nationwide</h4>
							</div>
							<div>
								<p>Find local chapters across the country and meet fellow pilots near you. Each chapter hosts regular events so you can see how you stack up against the competition.</p>
							</div>
						</div>
					</div>
					<div className="featuresItem">
						<div className="featuresItemText">
							<div>
								<h4>Races & Fun Flys</h4>
							</div>
							<div>
								<p>Kwadli hosts frequent competitive gatherings and casual events within its extensive network. The Organization currently has over 5,000 registered pilots and 100 active chapters nationwide.</p>
							</div>
						</div>
						<div className="featuresItemImg">
							<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="300" width="300"></img>
						</div>
					</div>
				</div>
				<div className="container-fluid communityInvite incentives">
					<div className="benefitsItem">
						<h3>Join Kwadli</h3>
						<p className="benefitsItemText">Kwadli is a national, professional, drone racing league with over 100 chapters. There are no other drone racing leagues with the amount of registered pilots found within our community. Want to get started?</p>
						<p><a className="btn btn-primary btn-lg invite-button" href="#" role="button">Learn more</a></p>
					</div>
					<div className="benefitsItems">
						<div className="benefitsItem">
							<div className="benefitsImg">
								<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="150" width="150"></img>
							</div>
							<h4>8,197</h4>
							<p>Registered Drone Pilots</p>
						</div>
						<div className="benefitsItem">
							<div className="benefitsImg">
								<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="150" width="150"></img>
							</div>
							<h4>188</h4>
							<p>Chapters Nationwide</p>
						</div>
					</div>
				</div>
				<div className="container-fluid sponsors">
					<h6>Proud Sponsors of Kwadli Drone Racing</h6>
					<div className="sponsorRow">
						<div className="benefitsImg">
							<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="125" width="125"></img>
						</div>
						<div className="benefitsImg">
							<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="125" width="125"></img>
						</div>
						<div className="benefitsImg">
							<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="125" width="125"></img>
						</div>
						<div className="benefitsImg">
							<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="125" width="125"></img>
						</div>
						<div className="benefitsImg">
							<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="125" width="125"></img>
						</div>
					</div>
					<div className="sponsorRow">
						<div className="benefitsImg">
							<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="125" width="125"></img>
						</div>
						<div className="benefitsImg">
							<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="125" width="125"></img>
						</div>
						<div className="benefitsImg">
							<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="125" width="125"></img>
						</div>
						<div className="benefitsImg">
							<img className="img-circle" src="../images/droneTakeOff_Hero.jpg"	height="125" width="125"></img>
						</div>
					</div>
				</div>
				<div className="container-fluid centeredComponent communityInvite benefitsItem">
					<h6>Create your Kwadli profile to gain access to local chapters and start racing! Kwadli was created by pilots, for pilots. Therefore, there is no cost because we work to make competitive drone racing available to everyone.</h6>
					<p><a className="btn btn-primary btn-lg invite-button" href="#" role="button">Create a Free Account</a></p>
				</div>
			</div>	
		);
	}
}