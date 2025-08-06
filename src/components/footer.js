import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component {
	render(){
		const currentYear = new Date().getFullYear();
		return(
			<footer className="footer">
				<div className="container">
					<nav className="navbar">
						<div className="footer-content">
							<div className="footer-brand">
								<Link to="/" className="navbar-brand">Kwadli</Link>
								<p className="footer-tagline">Professional FPV Drone Racing Network</p>
							</div>
							<div className="footer-links">
								<div className="footer-column">
									<h5>Platform</h5>
									<ul className="footer-nav">
										<li><Link className="nav-link" to="/about">About</Link></li>
										<li><Link className="nav-link" to="/features">Features</Link></li>
										<li><Link className="nav-link" to="/pricing">Pricing</Link></li>
									</ul>
								</div>
								<div className="footer-column">
									<h5>Community</h5>
									<ul className="footer-nav">
										<li><Link className="nav-link" to="/chapters">Chapters</Link></li>
										<li><Link className="nav-link" to="/events">Events</Link></li>
										<li><Link className="nav-link" to="/rankings">Rankings</Link></li>
									</ul>
								</div>
								<div className="footer-column">
									<h5>Support</h5>
									<ul className="footer-nav">
										<li><Link className="nav-link" to="/contact">Contact</Link></li>
										<li><Link className="nav-link" to="/help">Help Center</Link></li>
										<li><Link className="nav-link" to="/faq">FAQ</Link></li>
									</ul>
								</div>
								<div className="footer-column">
									<h5>Legal</h5>
									<ul className="footer-nav">
										<li><Link className="nav-link" to="/terms">Terms</Link></li>
										<li><Link className="nav-link" to="/privacy">Privacy</Link></li>
										<li><Link className="nav-link" to="/cookies">Cookies</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</nav>
					<div className="footer-bottom">
						<p className="copyright">© {currentYear} Kwadli. All rights reserved.</p>
						<div className="social-links">
							<a href="#" className="social-link">Twitter</a>
							<a href="#" className="social-link">Facebook</a>
							<a href="#" className="social-link">Instagram</a>
							<a href="#" className="social-link">YouTube</a>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}