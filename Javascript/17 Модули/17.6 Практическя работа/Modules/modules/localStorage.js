async function addItem(form) {
	const data = new FormData(form);
	const dataObject = Object.fromEntries(data)
	const newDataObject = {
		id: Date.now(),
		...dataObject
	};
	const storedData = JSON.parse(localStorage.getItem('tableData')) || [];

	storedData.push(newDataObject);

	localStorage.setItem('tableData', JSON.stringify(storedData));

	console.log('Добавлено: ', newDataObject);

	form.reset();

	const getMainPage = await import("./mainPage.js")

	getMainPage.default();
}

async function deleteItem(itemID) {
	const storedData = JSON.parse(localStorage.getItem('tableData')) || [];
	console.log('Сформирован: ', storedData);

	const newData = storedData.filter(item => item.id != itemID);

	console.log('Преобразован: ', newData);

	localStorage.setItem('tableData', JSON.stringify(newData));

	console.log('Записано в ЛС');

	const getMainPage = await import("./mainPage.js")

	getMainPage.default();
}

export {
	addItem,
	deleteItem,
}