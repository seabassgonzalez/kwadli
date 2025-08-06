// import React and Component from react

// export default class profile extends Component
	// render
		// return	
			// div welcome

import React, { Component } from 'react';

export default class Home extends Component {
	render(){
		return(
			<div className="professional-landing">
				<div className="hero-section">
					<div className="hero-content">
						<div className="hero-text">
							<h1 className="hero-title">Professional FPV Drone Racing Network</h1>
							<p className="hero-subtitle">Join the largest community of competitive drone pilots. Connect, compete, and elevate your racing career.</p>
							<div className="hero-buttons">
								<button className="btn-primary">Get Started</button>
								<button className="btn-secondary">Learn More</button>
							</div>
						</div>
					</div>
				</div>
				<section className="features-section">
					<div className="container">
						<h2 className="section-title">Why Choose Kwadli</h2>
						<div className="features-grid">
							<div className="feature-card">
								<div className="feature-icon">
									<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<circle cx="12" cy="12" r="10"></circle>
										<path d="M12 6v6l4 2"></path>
									</svg>
								</div>
								<h3>Professional Network</h3>
								<p>Connect with over 8,000 registered pilots across 188 chapters nationwide. Build your racing career with industry connections.</p>
							</div>
							<div className="feature-card">
								<div className="feature-icon">
									<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
										<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
									</svg>
								</div>
								<h3>Advanced Technology</h3>
								<p>Our proprietary frequency management system prevents channel conflicts, ensuring safe flights and competitive integrity.</p>
							</div>
							<div className="feature-card">
								<div className="feature-icon">
									<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
										<circle cx="9" cy="7" r="4"></circle>
										<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
										<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
									</svg>
								</div>
								<h3>Championship Events</h3>
								<p>Compete in local, regional, and national championships. Earn recognition and advance your professional racing career.</p>
							</div>
						</div>
					</div>
				</section>
				<section className="stats-section">
					<div className="container">
						<div className="stats-grid">
							<div className="stat-card">
								<h3 className="stat-number">8,197</h3>
								<p className="stat-label">Active Pilots</p>
							</div>
							<div className="stat-card">
								<h3 className="stat-number">188</h3>
								<p className="stat-label">Chapters Nationwide</p>
							</div>
							<div className="stat-card">
								<h3 className="stat-number">500+</h3>
								<p className="stat-label">Annual Events</p>
							</div>
							<div className="stat-card">
								<h3 className="stat-number">$2M+</h3>
								<p className="stat-label">Prize Pool</p>
							</div>
						</div>
					</div>
				</section>
				<section className="services-section">
					<div className="container">
						<h2 className="section-title">Our Platform Features</h2>
						<div className="services-grid">
							<div className="service-item">
								<div className="service-content">
									<h3>Frequency Management</h3>
									<p>Advanced vTx mapping technology ensures interference-free racing. Real-time frequency allocation prevents channel conflicts during events.</p>
									<a href="#" className="service-link">Learn about vTx Map →</a>
								</div>
								<div className="service-image">
									<div className="service-image-placeholder">Frequency Management System</div>
								</div>
							</div>
							<div className="service-item reverse">
								<div className="service-image">
									<div className="service-image-placeholder">Chapter Network Map</div>
								</div>
								<div className="service-content">
									<h3>Chapter Network</h3>
									<p>Join local chapters, participate in regional events, and build your racing community. Our network spans all major metropolitan areas.</p>
									<a href="#" className="service-link">Find your chapter →</a>
								</div>
							</div>
							<div className="service-item">
								<div className="service-content">
									<h3>Professional Racing League</h3>
									<p>Compete in sanctioned events, earn rankings, and qualify for national championships. Track your progress through our competitive system.</p>
									<a href="#" className="service-link">View upcoming events →</a>
								</div>
								<div className="service-image">
									<div className="service-image-placeholder">Racing League Events</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="testimonial-section">
					<div className="container">
						<h2 className="section-title">What Our Pilots Say</h2>
						<div className="testimonials-grid">
							<div className="testimonial-card">
								<p className="testimonial-text">"Kwadli transformed my hobby into a professional career. The network and resources are unmatched in the drone racing community."</p>
								<div className="testimonial-author">
									<div className="author-avatar"></div>
									<div>
										<p className="author-name">Michael Chen</p>
										<p className="author-title">Pro Pilot, West Coast Chapter</p>
									</div>
								</div>
							</div>
							<div className="testimonial-card">
								<p className="testimonial-text">"The frequency management system is a game-changer. No more crashes due to signal interference during competitions."</p>
								<div className="testimonial-author">
									<div className="author-avatar"></div>
									<div>
										<p className="author-name">Sarah Johnson</p>
										<p className="author-title">Chapter Lead, Texas</p>
									</div>
								</div>
							</div>
							<div className="testimonial-card">
								<p className="testimonial-text">"From local races to nationals, Kwadli provided the pathway to elevate my skills and compete at the highest level."</p>
								<div className="testimonial-author">
									<div className="author-avatar"></div>
									<div>
										<p className="author-name">David Park</p>
										<p className="author-title">National Champion 2023</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="partners-section">
					<div className="container">
						<h2 className="section-title">Trusted by Industry Leaders</h2>
						<div className="partners-grid">
							<div className="partner-logo">
								<div className="partner-placeholder">Partner 1</div>
							</div>
							<div className="partner-logo">
								<div className="partner-placeholder">Partner 2</div>
							</div>
							<div className="partner-logo">
								<div className="partner-placeholder">Partner 3</div>
							</div>
							<div className="partner-logo">
								<div className="partner-placeholder">Partner 4</div>
							</div>
							<div className="partner-logo">
								<div className="partner-placeholder">Partner 5</div>
							</div>
							<div className="partner-logo">
								<div className="partner-placeholder">Partner 6</div>
							</div>
						</div>
					</div>
				</section>
				<section className="cta-section">
					<div className="container">
						<div className="cta-content">
							<h2>Ready to Take Your Racing to the Next Level?</h2>
							<p>Join the largest professional drone racing network. Free for pilots, by pilots.</p>
							<div className="cta-buttons">
								<button className="btn-primary">Create Free Account</button>
								<button className="btn-secondary">Watch Demo</button>
							</div>
						</div>
					</div>
				</section>
			</div>	
		);
	}
}