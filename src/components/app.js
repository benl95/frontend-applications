import React from 'react';
import Header from './Header';
import BarChart from './BarChart';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header title="Hoe duurzaam rijdt de Nederlandse bevolking?" />
				<BarChart width={960} height={500} />
			</div>
		);
	}
}

export default App;
