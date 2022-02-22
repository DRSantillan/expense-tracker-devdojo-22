import ExpenseItem from '../item/ExpenseItem.component';
import './ExpenseItemList.styles.scss';
import Card from '../../ui/card/Card.component';
import ExpensesFilter from '../filter/ExpensesFilter.component';
import { useState } from 'react';

const ExpenseItemList = ({ expenses }) => {
	const [filteredYear, setFilteredYear] = useState('2020');
	const getFilteredExpenseYear = year => {
		setFilteredYear(year);
	};

	// const filteredExpenses = (expenses) => {
	// 	return expenses.filter(
	// 		expense =>
	// 			Number(
	// 				expense.date.toLocaleString('en-US', { year: 'numeric' })
	// 			) === Number(filteredYear)
	// 	);
	// }

	return (
		<Card className='expenses'>
			<ExpensesFilter
				onExpenseYearFilterChange={getFilteredExpenseYear}
				selectedYear={filteredYear}
			/>
			{expenses.map(expense => (
				<ExpenseItem key={expense.id} {...expense} />
			))}
		</Card>
	);
};

export default ExpenseItemList;
