import ExpenseItemDate from '../date/ExpenseItemDate.component';
import './ExpenseItem.styles.scss';
import Card from '../../ui/card/Card.component';

const ExpenseItem = ({ date, title, amount }) => {
	return (
		<Card className='expense-item'>
			<ExpenseItemDate date={date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${amount}</div>
			</div>
		</Card>
	);
};

export default ExpenseItem;
