import React from 'react';
import ExpenseForm from '../form/ExpenseForm.component';
import './ExpenseNew.styles.scss';

const NewExpense = ({ onExpenseChange }) => {
	const saveExpenseDataHandler = data => {
		const newExpenseData = {
			...data,
			id: Math.random().toString(),
		};
		
    onExpenseChange(newExpenseData)
	};
	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
