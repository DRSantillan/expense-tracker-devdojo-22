import ExpenseItem from '../item/ExpenseItem.component';
import './ExpenseItemList.styles.scss'
import Card from '../../ui/card/Card.component';

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