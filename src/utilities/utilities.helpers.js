export const getFormattedDates = (date) => {
    const formattedDate = new Date(date)
    const month = formattedDate.toLocaleString('en-US', { month: 'long' });
	const day = formattedDate.toLocaleString('en-US', { day: '2-digit' });
	const year = formattedDate.toLocaleString('en-US', { year: 'numeric' });

    return { month, day, year}
}