import { getButton, getHeading, getTable, getDiv } from './getElements.js';

export default async function getMainPage() {
	app.innerHTML = '';
	// Генерируем шапку главной страницы
	const heading = getHeading('Склад');
	const button = getButton('Добавить запись');
	
	button.addEventListener('click', async function (e) {
		const navigate = await import('./app.js')
		navigate.default('addPage')
	});
	const div = getDiv('flex');

	div.append(heading);
	div.append(button);
	app.append(div);

	// Генерируем таблицу
	const table = getTable("Название", "Полка", "Вес", "Время хранения");
	app.append(table);
}