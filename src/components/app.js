import React from 'react';
import Header from './Header';
import BarChart from './BarChart';
import MainFuel from '../store/mainFuelData';
import MinorFuel from '../store/minorFuelData';
import EmissionCode from '../store/co2Emission';
import Co2Emission from '../store/emissionCode';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header title="How sustainable is the population of the Netherlands driving?" />
				<BarChart
					width={960}
					height={500}
					text="Composition of the types of fuel used in the Netherlands from 1000.00 cars"
					FirstButton="Main Fuels"
					SecondButton="Miscellaneous Fuels"
					MainData={MainFuel}
					MinorData={MinorFuel}
					xAxis="amount"
					yAxis="fuel"
				/>
				<BarChart
					width={960}
					height={500}
					text="Distribution of emission codes and amount of CO2 emission from 100.00 cars"
					FirstButton="Emission codes"
					SecondButton="CO2 Emission"
					MainData={EmissionCode}
					MinorData={Co2Emission}
					xAxis="amount"
					yAxis="group"
				/>
			</div>
		);
	}
}

export default App;
