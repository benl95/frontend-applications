import { style } from 'd3';
import React from 'react';

class Paragraph extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const styleContainer = {
			display: 'flex',
			justifyContent: 'center',
		};

		const styleP = {
			marginTop: '1em',
			marginBottom: '1em',
			width: '30em',
			fontFamily: 'Roboto',
		};

		return (
			<div className="TextContainer" style={styleContainer}>
				<p style={styleP}>{this.props.text}</p>
			</div>
		);
	}
}

export default Paragraph;
