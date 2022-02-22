import React from 'react';
import { getFormattedDates } from '../../utilities/utilities.helpers';
import './ExpenseItemDate.styles.scss';

const ExpenseItemDate = ({ date }) => {
	const { day, month, year } = getFormattedDates(date);
	return (
		<div className='expense-date'>
			<div className='expense-date__month'>{month}</div>
			<div className='expense-date__year'>{year}</div>
			<div className='expense-date__day'>{day}</div>
		</div>
	);
};

export default ExpenseItemDate;
