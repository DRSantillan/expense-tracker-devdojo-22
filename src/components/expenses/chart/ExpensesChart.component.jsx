import React from 'react';
import Chart from '../../chart/Chart.component';

const ExpensesChart = ({ expenses }) => {
	console.log(expenses, 'expense in expense chart');
	const chartDataPoints = [
		{ label: 'Jan', value: 0 },
		{ label: 'Feb', value: 0 },
		{ label: 'Mar', value: 0 },
		{ label: 'Apr', value: 0 },
		{ label: 'May', value: 0 },
		{ label: 'Jun', value: 0 },
		{ label: 'Jul', value: 0 },
		{ label: 'Aug', value: 0 },
		{ label: 'Sep', value: 0 },
		{ label: 'Oct', value: 0 },
		{ label: 'Nov', value: 0 },
		{ label: 'Dec', value: 0 },
	];

	expenses.forEach(({ date, amount }) => {
		const month = new Date(date).getMonth();
		chartDataPoints[month].value += amount;
	});

	return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
