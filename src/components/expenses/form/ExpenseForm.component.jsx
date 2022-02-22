import { useState } from 'react';
import './ExpenseForm.styles.scss';

const ExpenseForm = ({ onSaveExpenseData }) => {
	const [formData, setFormData] = useState({
		title: '',
		amount: '',
		date: '',
	});
	// destructure the required form fields
	const { title, amount, date } = formData;

	// handles form submission
	const onSubmitFormHandler = event => {
		event.preventDefault();
		// this is just temporary
		console.log(formData);
		onSaveExpenseData(formData);
		setFormData({
			title: '',
			amount: '',
			date: '',
		});
	};
	const onFormChangeHandler = event => {
        console.log(event.target.value)
		setFormData(prevState => ({
			...prevState,
			[event.target.id]:
				 event.target.value,
		}));
	};
	return (
		<div>
			<form onSubmit={onSubmitFormHandler}>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>Title</label>
						<input
							type='text'
							id='title'
							onChange={onFormChangeHandler}
							value={title}
						/>
					</div>
					<div className='new-expense__control'>
						<label>Amount</label>
						<input
							type='number'
							min='0.01'
							step='0.01'
							id='amount'
							onChange={onFormChangeHandler}
							value={amount}
						/>
					</div>
					<div className='new-expense__control'>
						<label>Date</label>
						<input
							type='date'
							id='date'
							min='2019-01-01'
							max='2022-12-31'
							onChange={onFormChangeHandler}
							value={date}
						/>
					</div>
				</div>
				<div className='new-expense__actions'>
					<button type='Submit'>Add New Expense</button>
				</div>
			</form>
		</div>
	);
};

export default ExpenseForm;
