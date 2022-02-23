import { useState } from 'react';
import ExpenseForm from '../form/ExpenseForm.component';
import './ExpenseNew.styles.scss';

const NewExpense = ({ onExpenseChange }) => {
	const [isHidden, setIsHidden] = useState(true);
	const saveExpenseDataHandler = data => {
		const newExpenseData = {
			...data,
			id: Math.random().toString(),
		};

		onExpenseChange(newExpenseData);
	};

	const showFormHandler = () => {
		setIsHidden(false);
	};
	const hideFormHandler = () => {
		setIsHidden(true)
	}

	return (
		<div className='new-expense'>
			{isHidden ? (
				<button onClick={showFormHandler}>Add New Expense</button>
			) : (
				<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideForm={hideFormHandler} />
			)}
		</div>
	);
};

export default NewExpense;
