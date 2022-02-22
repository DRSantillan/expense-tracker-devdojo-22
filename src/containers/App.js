import { useState } from 'react';
import NewExpense from '../components/expenses/new/ExpenseNew.component';
import ExpenseItemList from '../components/expenses/list/ExpenseItemList.component';

import { database } from '../db/database';

function App() {
	const [expenseDB, setExpenseDB] = useState(database);

	const addExpenseHandler = expense => {
		console.log('inside app');
		console.log(expense, ' expense from expense form');
		setExpenseDB(prevState => ([
			...prevState,
			expense,
		]));
	};
	return (
		<>
			<NewExpense onExpenseChange={addExpenseHandler} />
			<ExpenseItemList expenses={expenseDB} />
		</>
	);
}

export default App;
