import React from 'react';
import { scaleLinear, max, scaleBand, axisLeft, axisBottom, select } from 'd3';

// Credits to Jonah Meijers for helping me with the update function of the barchart
class BarChart extends React.Component {
	constructor(props) {
		super(props);
		this.mainBarChart = this.mainBarChart.bind(this);
		this.state = { currentData: 'main' };
		this.ref = React.createRef();
	}

	componentDidMount() {
		this.mainBarChart();
	}

	componentDidUpdate() {
		this.mainBarChart();
	}

	mainBarChart() {
		const svg = select(this.ref.current);
		const data =
			this.state.currentData === 'main'
				? this.props.MainData
				: this.props.MinorData;
		const width = this.props.width;
		const height = this.props.height;
		const xValue = (data) => data[this.props.xAxis];
		const yValue = (data) => data[this.props.yAxis];
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
			<div>
				<div className="ButtonContainer">
					<button onClick={() => this.setState({ currentData: 'main' })}>
						{this.props.FirstButton}
					</button>
					<button onClick={() => this.setState({ currentData: 'minor' })}>
						{this.props.SecondButton}
					</button>
				</div>
				<div className="ChartContainer">
					<h1>{this.props.text}</h1>
					<svg ref={this.ref} width={960} height={500}>
						<g className="AxisLeft"></g>
						<g className="AxisBottom"></g>
					</svg>
				</div>
			</div>
		);
	}
}

export default BarChart;
