import * as React from 'react';
import './Clicker.css';

class Clicker extends React.Component {
	constructor(props) {
		super(props);

		this.state = {counter: 0};
	}

	render() {
		return (
			<div className="container">
				<div className="clicker">
					<div className="content">{this.state.counter}</div>
					<div className="menu">
						<div className="button plus">
							<i data-feather="plus"></i>
							<div>+</div>
						</div>
						<div className="button minus">
							<i data-feather="minus"></i>
							<div>-</div>
						</div>
						<div className="button reset">
							<i data-feather="refresh-ccw"></i>
							<div>*</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Clicker;