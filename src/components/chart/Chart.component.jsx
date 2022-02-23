import React from 'react';
import './Chart.styles.scss';
import ChartBar from './bar/ChartBar.component';

const Chart = ({dataPoints}) => {

	const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
	const totalMax = Math.max(...dataPointValues);
	return (
		<div className='chart'>
			{dataPoints.map(dataPoint => (
				<ChartBar
					key={dataPoint.label}
					maxValue={totalMax}
					{...dataPoint}
				/>
			))}
		</div>
	);
};

export default Chart;
