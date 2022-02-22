import { useState } from 'react';
import ExpenseItemDate from '../date/ExpenseItemDate.component';
import './ExpenseItem.styles.scss';
import Card from '../../ui/card/Card.component';

const ExpenseItem = ({ date, title, amount }) => {
	const [itemTitle, setItemTitle] = useState(title);

	const onButtonClickHandler = () => {
		setItemTitle('New Title');
	};
	return (
		<Card className='expense-item'>
			<ExpenseItemDate date={date} />
			<div className='expense-item__description'>
				<h2>{itemTitle}</h2>
				<div className='expense-item__price'>${amount}</div>
			</div>
			<button onClick={onButtonClickHandler}>Change Title</button>
		</Card>
	);
};

export default ExpenseItem;
