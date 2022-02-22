import { useState } from 'react';
import ExpenseItemDate from '../date/ExpenseItemDate.component';
import './ExpenseItem.styles.scss';
import Card from '../../ui/card/Card.component';

const ExpenseItem = ({ date, title, amount }) => {
	const [itemTitle, setItemTitle] = useState(title);
	return (
		<li>
			<Card className='expense-item'>
				<ExpenseItemDate date={date} />
				<div className='expense-item__description'>
					<h2>{itemTitle}</h2>
					<div className='expense-item__price'>${amount}</div>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
