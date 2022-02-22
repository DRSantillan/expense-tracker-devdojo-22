import React from 'react'
import ExpenseItem from '../expense-item/ExpenseItem.component';
import './ExpenseItemList.styles.scss'
import Card from '../card/Card.component';

const ExpenseItemList = ({expenses}) => {
    
  return (
		<Card className='expenses'>
			{expenses.map(expense => (
				<ExpenseItem key={expense.id} {...expense} />
			))}
		</Card>
  );
}

export default ExpenseItemList