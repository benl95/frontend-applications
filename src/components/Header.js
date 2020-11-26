import React from 'react';

class Header extends React.Component {
	render() {
		const styleConfig = {
			fontSize: '30px',
			textAlign: 'center',
		};
		return (
			<div>
				<h1 style={styleConfig}>{this.props.title}</h1>
			</div>
		);
	}
}

export default Header;
