import { useState } from 'react';
import NewExpense from '../components/expenses/new/ExpenseNew.component';
import Expenses from '../components/expenses/expenses/Expenses.components';

import { database } from '../db/database';

function App() {
	// init state for the database
	const [expenseDB, setExpenseDB] = useState(database);

	// add an expense to the existing state
	const addExpenseHandler = expense => {
		setExpenseDB(prevState => [...prevState, expense]);
	};
	//
	const deleteExpenseItemHandler = id => {
		if (window.confirm('Are you sure you want to delete this expense?')) {
			const updatedExpenseDB = expenseDB.filter(
				expense => expense.id !== id
			);
			console.log(updatedExpenseDB);
			setExpenseDB(updatedExpenseDB);
		}
	};
	//
	return (
		<>
			<h2 style={{ textAlign: 'center', color: 'white' }}>
				Personal Expense Tracker - DEVDOJO22
			</h2>
			<NewExpense onExpenseChange={addExpenseHandler} />
			<Expenses
				expenses={expenseDB}
				onDelete={deleteExpenseItemHandler}
			/>
		</>
	);
}

export default App;
