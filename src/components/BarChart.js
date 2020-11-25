import React from 'react';
import { scaleLinear, max, scaleBand, axisLeft, axisBottom, select } from 'd3';

class BarChart extends React.Component {
	constructor(props) {
		super(props);
		this.createBarChart = this.createBarChart.bind(this);
	}

	componentDidMount() {
		this.createBarChart();
	}

	componentDidUpdate() {
		this.createBarChart();
	}

	createBarChart() {
		const node = this.node;
		const data = this.props.data;
		const width = this.props.width;
		const height = this.props.height;
		const xValue = (data) => data.amount;
		const yValue = (data) => data.fuel;
		const margin = { top: 20, right: 20, bottom: 20, left: 100 };
		const innerWidth = width - margin.left - margin.right;
		const innerHeight = height - margin.top - margin.bottom;

		console.log(node);

		const xScale = scaleLinear()
			.domain([0, max(data, xValue)])
			.range([0, innerWidth]);

		const yScale = scaleBand()
			.domain(data.map(yValue))
			.range([0, innerHeight])
			.padding(0.1);

		const g = select(node)
			.append('svg')
			.attr('transform', `translate(${margin.left}, ${margin.top})`);

		g.append('g').call(axisLeft(yScale));
		g.append('g')
			.call(axisBottom(xScale))
			.attr('transform', `translate(0, ${innerHeight})`);

		select(node)
			.selectAll('rect')
			.data(data)
			.enter()
			.append('rect')
			.attr('y', (data) => yScale(yValue(data)))
			.attr('width', (data) => xScale(xValue(data)))
			.attr('height', yScale.bandwidth());
	}

	render() {
		return (
			<svg ref={(node) => (this.node = node)} width={960} height={500} />
		);
	}
}

export default BarChart;
