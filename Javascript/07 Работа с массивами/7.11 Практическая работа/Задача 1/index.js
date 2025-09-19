const books = ['Мастер и Маргарита', 'Гарри Поттер', 'За пропастью во ржи', 'Властелин Колец', 'Дюна', 'Отцы и дети']

// Создаем список с классом "library__list"
const listEl = document.createElement("ul")
listEl.classList.add("library__list")

// Создаем функцию для рендера элементов массива на странице
function renderList(arr) {

	listEl.innerHTML = ""
	document.querySelector(".library").append(listEl)

	for (let i = 0; i < arr.length; i++) {
		const liEl = document.createElement("li")
		liEl.classList.add("library__item")
		liEl.textContent = `${i + 1}) ${arr[i]}`
		listEl.append(liEl)
	}
}

// Рендерим массив books на странице
renderList(books)

const addBookBtn = document.querySelector("#add_book")
addBookBtn.onclick = addBook

// Создаем функции для добавления новой книги в список (массив)
function addBook() {

	let bookName = prompt("Введите название книги")

	if (bookName === "") {
		alert("Название книги не введено!")
	} else if (bookName === null) {

	} else {
		addElement(books, bookName)
	}
}

function addElement(arr, element) {
	arr.push(element)
	renderList(arr)
}

// Создаем функции для поиска книги в списке (массиве)
function find(arr, search) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === search) {
			return i
		}
	}

	return -1
}

function searchInList() {



	const search = prompt("Какую книгу вы ищете?")

	if (search === null) {

	} else if (search === "") {
		alert("Введите название книги")
	} else {
		// Находим ранее выделенные элементы
		const outlinedLibraryItems = document.querySelectorAll(".library__item")
		// Удаляем у ранее выделенных элементов выделение
		for (const item of outlinedLibraryItems) {
			item.classList.remove("outline")
		}

		const findIndex = find(books, search)

		if (findIndex > -1) {
			document.querySelector(`.library__item:nth-child(${findIndex + 1})`).classList.add("outline")
		} else if (findIndex <= -1) {
			alert("Книга не найдена")
			document.querySelector(".outline").classList.remove("outline")

		}
	}

}

const findBookBtn = document.querySelector("#search_book")
findBookBtn.onclick = searchInList