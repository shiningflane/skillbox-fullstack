import { getButton, getHeading, getInput, getForm } from './getElements.js';

export default async function getAddPage() {
	app.innerHTML = '';

	const heading = getHeading('Добавить запись');
	const form = getForm('form-add');

	const name = getInput('text', 'name', 'required', 'Название');
	const place = getInput('text', 'place', 'required', 'Полка');
	const weight = getInput('number', 'weight', 'required', 'Вес');
	const storageTime = getInput('date', 'storageTime', 'required');

	form.append(name, place, weight, storageTime);

	app.append(heading);
	app.append(form);

	const addItemHandler = async (event) => {
		event.preventDefault();

		const isValid = await validator.revalidate();

		if (!isValid) {
			console.log('Форма содержит ошибки');
			return; // Останавливаем выполнение функции
		}

		const addItem = await import('./localStorage.js');
		addItem.addItem(form);
	}

	const button = getButton('Добавить запись');
	button.type = "submit"

	form.append(button);
	
	const { initValidator } = await import('./validator.js');
	const validator = initValidator(form);

	form.addEventListener('submit', addItemHandler);

}