import React, { Component } from 'react';

class BlackboxViewer extends Component {
	render() {
		return (
			<div className="blackbox-viewer">
				<div className="bb-top-actions">
					<a
						className="btn btn-primary"
						href="https://blackbox.betaflight.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Open in New Tab
					</a>
				</div>

				<div className="bb-card bb-iframe-wrap">
					<iframe
						title="Betaflight Blackbox Explorer"
						src="https://blackbox.betaflight.com/"
						className="bb-iframe"
					/>
				</div>
			</div>
		);
	}
}

export default BlackboxViewer;
