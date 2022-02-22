import ExpenseItem from '../item/ExpenseItem.component';
import './ExpensesList.styles.scss';

const ExpensesList = ({ expenses, year }) => {
	// display conditional content based on filtered year

	if (!expenses.length)
		return (
			<h2 className='expenses-list__fallback'>
				No Expenses found for {year}
			</h2>
		);

	// clean code just vars
	return (
		<ul className='expenses-list'>
			{expenses.map(expense => (
				<ExpenseItem key={expense.id} {...expense} />
			))}
		</ul>
	);
};

export default ExpensesList;
