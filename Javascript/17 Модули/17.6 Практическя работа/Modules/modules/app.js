
export default async function navigate(pageName) {
	const app = document.querySelector('#app');
	app.innerHTML = '';

	const getLoader = await import('./loader.js');
	const loader = getLoader.default();
	app.append(loader);

	switch (pageName) {
		default:
			const mainPage = await import("./mainPage.js");
			mainPage.default();
			loader.remove();
			break
		case 'addPage':
			const addPage = await import("./addPage.js");
			addPage.default();
			loader.remove();
			break
	}
}

navigate('mainPage');

//DONE Динамический импорт
//DONE Добавить прелоадер
//DONE Добавить сортировку таблицы
//DONE Валидация формы - разобраться почему не отображаются ошибки в форме
//TODO Стилизация приложения