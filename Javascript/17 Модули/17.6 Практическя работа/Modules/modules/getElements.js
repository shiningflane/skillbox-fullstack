import { sanitize } from "./sanitize.js";
import { deleteItem } from "./localStorage.js";

function getHeading(text) {
	const headingElement = document.createElement('h1');
	headingElement.textContent = text;
	return headingElement;
}

function getButton(text, onclick = '') {
	const buttonElement = document.createElement('button');
	buttonElement.type = 'button'
	buttonElement.classList.add('btn')
	buttonElement.textContent = text;
	if (onclick) {
		buttonElement.onclick = onclick;
	}
	return buttonElement;
}

function getTable(col1 = '', col2 = '', col3 = '', col4 = '', col5 = '') {
	const tableElement = document.createElement('table');
	// Генерируем шапку таблицы
	tableElement.innerHTML = `
	<thead>
		<tr>
		<th><button class='name btn btn--table'>${sanitize(col1)}</button></th>
		<th><button class='place btn btn--table'>${sanitize(col2)}</button></th>
		<th><button class='weight btn btn--table'>${sanitize(col3)}</button></th>
		<th><button class='storageTime btn btn--table'>${sanitize(col4)}</button></th>
		<th>${sanitize(col5)}</th>
		</tr>
	</thead>
	<tbody>
	</tbody>
	`
	
	// Генерируем тело таблицы
	const storedData = JSON.parse(localStorage.getItem('tableData')) || [];

	const tbody = tableElement.querySelector('tbody');

	storedData.forEach(element => {
		const tr = document.createElement('tr');
		tr.innerHTML = `
			<td>${sanitize(element.name)}</td>
            <td>${sanitize(element.place)}</td>
            <td>${sanitize(element.weight)}</td>
            <td>${sanitize(element.storageTime)}</td>
            <td><button class="btn delete-btn" data-id="${element.id}">Удалить</button></td>
		`
		tbody.appendChild(tr);
	});

	//Вешаем обработчик событий на клик по кнопке удаления
	tableElement.addEventListener('click', function (e) {
		if (e.target.classList.contains('delete-btn')) {
			const deleteID = e.target.dataset.id;
			deleteItem(deleteID);
		}
	});

	// Обработчик событий для сортировки таблицы

	tableElement.addEventListener('click', async function (e) {
		if (e.target.tagName == 'BUTTON' && e.target.className != '' && !e.target.classList.contains("delete-btn")) {
			const key = e.target.className.split(' ')[0];
			const sortTable = await import('./sortTable.js');
			sortTable.default(key)
		}
	});

	return tableElement;
}

function getInput(type = 'text', name = '', required = '', placeholder = '', inputValue = '') {
	const inputElement = document.createElement('input');
	const wrapperElement = document.createElement('div');
	wrapperElement.classList.add('input-wrapper');
	wrapperElement.append(inputElement);
	inputElement.type = sanitize(type);
	if (name) {
		inputElement.name = name;
	}
	if (required) {
		inputElement.setAttribute('required', true);
	}
	inputElement.placeholder = sanitize(placeholder);
	inputElement.value = sanitize(inputValue);

	return wrapperElement;
}

function getDiv(className) {
	const div = document.createElement('div');
	div.classList.add(className);
	return div
}

function getContainer() {
	const container = document.createElement('div');
	container.classList.add('container');
	return container
}

function getForm(formID) {
	const form = document.createElement('form');
	form.id = formID;
	return form
}

export {
	getHeading,
	getButton,
	getTable,
	getInput,
	getDiv,
	getContainer,
	getForm,
}