// Получаем последний ID из localStorage
function getLastFilmId() {
	const films = JSON.parse(localStorage.getItem('films')) || [];
	if (films.length === 0) {
		return 0;
	}
	// Находим максимальный ID
	return Math.max(...films.map(film => film.id));
}

let lastId = getLastFilmId();

const addFilmButton = document.querySelector('#film-form button');
const filmForm = document.querySelector('#film-form');
const cancelEditButton = document.createElement('button');
const sortButton = document.querySelector('.sort__btn');
let sortedTable = null;

function handleFormSubmit(e) {

	if (!validate.isValid) {
        console.log('Форма содержит ошибки');
        return; // Останавливаем выполнение функции
    }

	const title = document.querySelector('#title').value;
	const genre = document.querySelector('#genre').value;
	const releaseYear = document.querySelector('#releaseYear').value;
	const isWatched = document.querySelector('#isWatched').checked;

	const films = JSON.parse(localStorage.getItem('films')) || [];

	if (editingFilmId) {
		// Режим редактирования - обновляем существующий фильм
		const filmIndex = films.findIndex(film => film.id == editingFilmId);
		if (filmIndex !== -1) {
			films[filmIndex] = {
				...films[filmIndex],
				title,
				genre,
				releaseYear,
				isWatched
			};
		}
		// Сбрасываем режим редактирования
		editingFilmId = null;
		addFilmButton.textContent = 'Добавить';
		cancelEditButton.remove();
	} else {
		// Режим добавления - создаем новый фильм
		const film = {
			id: ++lastId,
			title,
			genre,
			releaseYear,
			isWatched,
		}
		films.push(film);
	}

	sortedTable = null;

	// Сохраняем и обновляем интерфейс
	localStorage.setItem('films', JSON.stringify(films));
	filmForm.reset();
	renderTable();
}

function renderTable() {
	let films = JSON.parse(localStorage.getItem('films')) || [];

	const filmTableBody = document.querySelector('#film-tbody');

	filmTableBody.innerHTML = '';

	const filmsToRender = sortedTable !== null ? sortedTable : films;

	filmsToRender.forEach(film => {
		const row = document.createElement('tr');
		row.innerHTML = `
            <td>${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.releaseYear}</td>
            <td>${film.isWatched ? 'Да' : 'Нет'}</td>
            <td>
                <button class="btn film-info__edit" id="edit-${film.id}">Редактировать</button>
                <button class="btn film-info__delete" id="delete-${film.id}">Удалить</button>
            </td>
            `
		filmTableBody.appendChild(row)
	});
}



filmForm.addEventListener('submit', (e) => {
	e.preventDefault();
	handleFormSubmit();
});

let editingFilmId = null;

document.addEventListener('click', function (e) {
	const films = JSON.parse(localStorage.getItem('films')) || [];
	// Обработчик удаления фильма
	if (e.target.classList.contains('film-info__delete')) {
		const filmId = e.target.id.split('-')[1];

		const updatedFilms = films.filter(film => film.id != filmId);
		localStorage.setItem('films', JSON.stringify(updatedFilms));

		renderTable();

		// Обработчик редактирования фильма
	} else if (e.target.classList.contains('film-info__edit')) {
		const filmId = e.target.id.split('-')[1];
		const film = films.find(f => f.id == filmId);

		if (film) {
			// Заполняем форму данными фильма
			document.querySelector('#title').value = film.title;
			document.querySelector('#genre').value = film.genre;
			document.querySelector('#releaseYear').value = film.releaseYear;
			document.querySelector('#isWatched').checked = film.isWatched;

			// Переключаем в режим редактирования
			editingFilmId = filmId;
			addFilmButton.textContent = 'Обновить';
			cancelEditButton.textContent = 'Отменить редактирование';
			cancelEditButton.id = 'cancel-edit'
			addFilmButton.parentNode.appendChild(cancelEditButton);
		}
	} else if (e.target.id == 'cancel-edit') {
		filmForm.reset();
		cancelEditButton.remove()
	} else if (e.target == sortButton) {
		tableSort();
		console.log('SORT');
	}
});

function tableSort() {
	const selectedSort = document.querySelector('#sort-select').value;

	const films = JSON.parse(localStorage.getItem('films')) || [];

	sortedTable = [...films]

	switch (selectedSort) {
		case 'title':
			sortedTable.sort((a, b) => a.title.localeCompare(b.title));
			break;
		case 'genre':
			sortedTable.sort((a, b) => a.genre.localeCompare(b.genre));
			break;
		case 'releaseYear':
			sortedTable.sort((a, b) => a.releaseYear - b.releaseYear);
			break;

		default:
			sortedTable = null;
			break;
	}

	renderTable();
}

renderTable();