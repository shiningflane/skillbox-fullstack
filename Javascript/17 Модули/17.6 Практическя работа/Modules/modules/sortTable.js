export default async function sortTable(key) {
	const storedData = JSON.parse(localStorage.getItem('tableData')) || [];
	storedData.sort((a, b) => {
		if (!isNaN(a[key]) && !isNaN(b[key])) {
			return Number(a[key]) - Number(b[key]);
		}

		if (a[key] && b[key] && !isNaN(Date.parse(a[key]))) {
			return new Date(a[key]) - new Date(b[key]);
		}

		return a[key].localeCompare(b[key]);
	})
	localStorage.setItem('tableData', JSON.stringify(storedData));
	const navigate = await import('./app.js');
	navigate.default('mainPage')
}