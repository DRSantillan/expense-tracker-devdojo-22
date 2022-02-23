import { useState } from 'react';
import ExpenseItemDate from '../date/ExpenseItemDate.component';
import './ExpenseItem.styles.scss';
import Card from '../../ui/card/Card.component';
import { MdDelete } from 'react-icons/md';

const ExpenseItem = ({ id,date, title, amount,onDelete }) => {
	const [itemTitle, setItemTitle] = useState(title);
	return (
		<li>
			<Card className='expense-item'>
				<ExpenseItemDate date={date} />
				<div className='expense-item__description'>
					<h2>{itemTitle}</h2>
					<div className='expense-item__price'>${amount}</div>
				</div>

				<MdDelete className='delete-expense'
					onClick={() => onDelete(id)}
					fill='white'
					size={40}
					style={{ verticalAlign: 'middle' }}
				/>
			</Card>
		</li>
	);
};

export default ExpenseItem;
