import React from 'react';
import Header from './Header';
import BarChart from './BarChart';
import MainFuel from '../store/mainFuelData';
import MinorFuel from '../store/minorFuelData';
import Co2Emission from '../store/co2Emission';
import EmissionCode from '../store/emissionCode';
import Paragraph from './Paragraph';
import './app.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header title="Hoe duurzaam rijdt de Nederlandse bevolking?" />
				<Paragraph text="Na een zegetocht van meer dan 120 jaar maakt de verbrandingsmotor zich op om het stokje over te geven aan zijn elektrische opvolger. Dat komt vooral doordat de prijzen van elektrische auto's in rap tempo dalen én het aanbod van betaalbare modellen steeds groter wordt. Vanuit de overheid wordt er ook langzaam naar een steeds duurzamere toekomst gewerkt als het aankomt op auto's." />

				<Paragraph text="Sinds November 2020 geldt binnen meerdere steden in Nederland een milieuzone voor personenauto's met een dieselmotor. Al met al wordt er aan een duurzame toekomst gewerkt, maar hoe ziet er op dit moment uit met de hudige landschap van de Nederlandse wagenpark. Is de Nederlandse bevolking ook op weg naar een duurzame toekomst of blijkt dit anders?" />

				<Paragraph text="Om een beeld te krijgen hoe duurzaam Nederland op dit moment rijdt hebben wij gekeken naar het brandstofverbruik van 1000.00 autos. Zoals te verwachten zijn de twee grootste brandstoftypes onder de autos nog steeds Benzine (71291) en Diesel (20941). Elektrische auto's komt op de derde plek met 6497 van de 1000.00" />
				<BarChart
					width={660}
					height={300}
					text="Verdeling van de gebruikte brandstof types in Nederland van 1000.00 auto's"
					FirstButton="Main Fuels"
					SecondButton="Miscellaneous Fuels"
					MainData={MainFuel}
					MinorData={MinorFuel}
					xAxis="amount"
					yAxis="fuel"
				/>
				<Paragraph text="Zoals uit de bovenstaande cijfers te zien zijn voertuigen die rijden op fossiele brandstofffen nog steeds de grootste groep onder de voertuigen in Nederland. Hoe zit het met de hoogte van de CO2 uitstoot van deze auto's?" />

				<Paragraph text="De grootste groep onder de auto's zit tussen de 37-161mg per gereden kilometer met 37531 van de 1000.00. Op de tweede plek staat 162-261g per gereden kilometer met 13241. Overigens moet er bij vermeld worden dat bij 47.9% van de 1000.00 de CO2 uitstoot onbekend is. Verder kunnen we zien dat het gros van de auto's een emissieklasse heeft van 6 met 27897. Ook hierbij mist er bij de helft van de auto's data over de emissieklasse." />

				<BarChart
					width={660}
					height={300}
					text="Verdeling emissie codes en CO2 uitstoot van 1000.00 auto's"
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
