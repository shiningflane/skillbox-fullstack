const filmTableBody = document.getElementById("film-tbody");
const deleteAllFilmsButton = document.querySelector('#clear-allfilms');
const filterForm = document.querySelector('#filter-form');

function handleFormSubmit(e) {
  e.preventDefault();

  if (!validate.isValid) {
        console.log('Форма содержит ошибки');
        return; // Останавливаем выполнение функции
    }

  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;
  const releaseYear = document.getElementById("releaseYear").value;
  const isWatched = document.getElementById("isWatched").checked;

  const film = {
    title,
    genre,
    releaseYear,
    isWatched
  };

  addFilm(film);
}

async function addFilm(film) {
  // const films = JSON.parse(localStorage.getItem("films")) || [];
  // films.push(film);
  // localStorage.setItem("films", JSON.stringify(films));

  // console.log(film);
  await fetch("https://sb-film.skillbox.cc/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: "shakaevvv@mail.ru",
    },
    body: JSON.stringify(film),
  });
  renderTable();
}

async function renderTable() {
  // const films = JSON.parse(localStorage.getItem("films")) || [];
  const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
    headers: {
      email: "shakaevvv@mail.ru",
    },
  });

  const films = await filmsResponse.json();

  renderFilteredTable(films);
}

async function renderFilteredTable(films) {
  

  // Clear table body first
  filmTableBody.innerHTML = "";

  // Then add new rows
  films.forEach((film, index) => {
    const row = document.createElement("tr");
    row.dataset.filmId = film.id;
    const deleteFilmButton = document.createElement('button');
    deleteFilmButton.classList.add('btn', 'btn--wide', 'btn-film-delete');
    deleteFilmButton.textContent = 'Удалить';
    
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
      <td></td>
    `;
    const lastRowChild = row.lastElementChild;
    lastRowChild.appendChild(deleteFilmButton);
    filmTableBody.appendChild(row);
  });
}

async function deleteFilm(e) {
  const button = e.target.closest('.btn-film-delete')
  if (!button) {
    return;
  }

  e.preventDefault();

  const row = button.closest('tr');
  const selectedFilmID = row.dataset.filmId;

  const response = await fetch(`https://sb-film.skillbox.cc/films/${selectedFilmID}`, {
    method: 'DELETE',
    headers: {
      email: 'shakaevvv@mail.ru'
    },
  });

  renderTable();
}

async function deleteAllFilms(e) {
  e.preventDefault();
  const response = await fetch(`https://sb-film.skillbox.cc/films`, {
    method: 'DELETE',
    headers: {
      email: 'shakaevvv@mail.ru'
    },
  });

  renderTable();
}

async function handleFilterForm() {
  const titleFilter = document.querySelector('#title-filter').value.toLowerCase().trim();
  const genreFilter = document.querySelector('#genre-filter').value.toLowerCase().trim();
  const releaseYearFilter = document.querySelector('#releaseYear-filter').value.trim();
  const isWatchedFilter = document.querySelector('#isWatched-filter').value.trim();

  console.log(isWatchedFilter);

  const response = await fetch(`https://sb-film.skillbox.cc/films`, {
    headers: {
      email: 'shakaevvv@mail.ru',
    }
  });

  const films = await response.json();

  const filteredFilms = films.filter((film) => {
    const matchTitle = film.title.toLowerCase().includes(titleFilter);
    const matchGenre = film.genre.toLowerCase().includes(genreFilter);
    const matchReleaseYear = releaseYearFilter ? film.releaseYear.includes(Number(releaseYearFilter)) : true;
    const matchWatched = isWatchedFilter === 'isWatched-all' ? true : film.isWatched === (isWatchedFilter === 'isWatched-true');

    return matchTitle && matchGenre && matchReleaseYear && matchWatched
  })

  renderFilteredTable(filteredFilms);
}

deleteAllFilmsButton.addEventListener('click', deleteAllFilms);

document
  .getElementById("film-form")
  .addEventListener("submit", handleFormSubmit);

filmTableBody.addEventListener('click', deleteFilm);

filterForm.addEventListener('input', handleFilterForm);

// Display films on load
renderTable();
