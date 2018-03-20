import * as React from 'react';
import './Clicker.css';

class Clicker extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<div className="clicker">
					<div className="content"></div>
					<div className="menu">
						<div className="button plus">
							<i data-feather="plus"></i>
						</div>
						<div className="button minus">
							<i data-feather="minus"></i>
						</div>
						<div className="button reset">
							<i data-feather="refresh-ccw"></i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Clicker;