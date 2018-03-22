import * as React from 'react';
import { connect } from 'react-redux';
import { updateCounter } from 'actions';
import './Clicker.css';

class Clicker extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="clicker">
					<div className="content">{this.props.counter}</div>
					<div className="menu">
						<div className="button plus" onClick={() => this.props.updateCounter(this.props.counter+1)}>
							<i data-feather="plus"></i>
							<div>+</div>
						</div>
						<div className="button minus" onClick={() => this.props.updateCounter(this.props.counter-1)}>
							<i data-feather="minus"></i>
							<div>-</div>
						</div>
						<div className="button reset" onClick={() => this.props.updateCounter(0)}>
							<i data-feather="refresh-ccw"></i>
							<div>*</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ counter }) {
	return { counter };
}

export default connect(mapStateToProps, { updateCounter })(Clicker);