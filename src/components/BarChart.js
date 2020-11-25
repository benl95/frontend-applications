import React from 'react';
import { scaleLinear, max, scaleBand, axisLeft, axisBottom, select } from 'd3';
import Data from '../store/mainFuelData';
import MinorData from '../store/minorFuelData';

class BarChart extends React.Component {
	constructor(props) {
		super(props);
		this.mainBarChart = this.mainBarChart.bind(this);
		this.state = { currentData: 'main' };
	}

	componentDidMount() {
		this.mainBarChart();
	}

	componentDidUpdate() {
		this.mainBarChart();
	}

	mainBarChart() {
		const svg = select('svg');
		const data = this.state.currentData === 'main' ? Data : MinorData;
		const width = this.props.width;
		const height = this.props.height;
		const xValue = (data) => data.amount;
		const yValue = (data) => data.fuel;
		const margin = { top: 20, right: 20, bottom: 20, left: 100 };
		const innerWidth = width - margin.left - margin.right;
		const innerHeight = height - margin.top - margin.bottom;

		const xScale = scaleLinear()
			.domain([0, max(data, xValue)])
			.range([0, innerWidth]);

		const yScale = scaleBand()
			.domain(data.map(yValue))
			.range([0, innerHeight])
			.padding(0.1);

		const g = svg.attr(
			'transform',
			`translate(${margin.left}, ${margin.top})`
		);

		g.select('.AxisLeft').call(axisLeft(yScale));
		g.select('.AxisBottom')
			.call(axisBottom(xScale))
			.attr('transform', `translate(0, ${innerHeight})`);

		g.selectAll('rect')
			.data(data)
			.join('rect')
			.transition()
			.duration(1000)
			.attr('y', (data) => yScale(yValue(data)))
			.attr('width', (data) => xScale(xValue(data)))
			.attr('height', yScale.bandwidth());
	}

	render() {
		return (
			<>
				<div className="ButtonContainer">
					<button onClick={() => this.setState({ currentData: 'main' })}>
						Main fuel
					</button>
					<button onClick={() => this.setState({ currentData: 'minor' })}>
						Miscellaneous fuel
					</button>
				</div>
				<div className="ChartContainer">
					<h1>Composition of the types of fuel used in the Netherlands</h1>
					<svg width={960} height={500}>
						<g className="AxisLeft"></g>
						<g className="AxisBottom"></g>
					</svg>
				</div>
			</>
		);
	}
}

export default BarChart;
