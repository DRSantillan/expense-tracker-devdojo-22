import ExpenseItemList from '../components/expenses/list/ExpenseItemList.component';

function App() {
	const expenses = [
		{
			id: 1,
			title: 'Car Insurance',
			amount: 494.44,
			date: new Date(2022, 2, 22),
		},
		{ id: 2, title: 'Petrol', amount: 20.0, date: new Date(2022, 2, 22) },
		{
			id: 3,
			title: 'Groceries',
			amount: 89.0,
			date: new Date(2022, 2, 22),
		},
		{
			id: 4,
			title: 'Vape Products',
			amount: 380.35,
			date: new Date(2022, 2, 22),
		},
		{
			id: 5,
			title: 'Online Course',
			amount: 27.89,
			date: new Date(2022, 2, 22),
		},
	];
	return (
		<>
			<ExpenseItemList expenses={expenses} />
		</>
	);
}

export default App;
