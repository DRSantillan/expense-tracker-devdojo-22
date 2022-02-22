
import './Expenses.styles.scss';
import Card from '../../ui/card/Card.component';
import ExpensesFilter from '../filter/ExpensesFilter.component';
import { useState } from 'react';
import ExpensesList from '../list/ExpensesList.component';

const Expenses = ({ expenses }) => {
    // init state for filtering by year
	const [filteredYear, setFilteredYear] = useState('2020');
	// set the state
	const filteredExpenseYear = year => {
		setFilteredYear(year);
	};
	// get expense base on selected expense year using filter
	const filteredExpenses = expenses.filter(
		({ date }) => new Date(date).getFullYear().toString() === filteredYear
	);
	
	console.log(filteredExpenses)
	// clean code just vars
	return (
		<Card className='expenses'>
			<ExpensesFilter
				onExpenseYearFilterChange={filteredExpenseYear}
				selectedYear={filteredYear}
			/>
			<ExpensesList year={filteredYear} expenses={filteredExpenses}/>
		</Card>
	);
};

export default Expenses;
