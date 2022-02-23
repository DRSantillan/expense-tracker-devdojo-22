import React from 'react';
import './ExpensesFilter.styles.scss';

const ExpensesFilter = ({ onExpenseYearFilterChange, selectedYear }) => {
	const handleYearChange = event => {
        onExpenseYearFilterChange(event.target.value)
	};
	return (
		<div className='expenses-filter'>
			
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select value={selectedYear} onChange={handleYearChange}>
					<option  value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
				</select>
			</div>
			
		</div>
	);
};

export default ExpensesFilter;
