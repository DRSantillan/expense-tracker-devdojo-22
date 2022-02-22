import { useState } from 'react';
import NewExpense from '../components/expenses/new/ExpenseNew.component';
import Expenses from '../components/expenses/expenses/Expenses.components';

import { database } from '../db/database';

function App() {
	// init state for the database
	
	const [expenseDB, setExpenseDB] = useState(database);

	// add an expense to the existing state
	const addExpenseHandler = expense => {
		setExpenseDB(prevState => ([
			...prevState,
			expense,
		]));
	};
	//
	return (
		<>
			<NewExpense onExpenseChange={addExpenseHandler} />
			<Expenses expenses={expenseDB} />
		</>
	);
}

export default App;
