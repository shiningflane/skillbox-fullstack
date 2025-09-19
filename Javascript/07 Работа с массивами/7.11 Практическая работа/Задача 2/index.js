const heights = [164, 157, 160, 143, 170]

// Создаем список с классом "height__list"
const listEl = document.createElement("ul")
listEl.classList.add("height__list")

// Создаем функцию для рендера элементов массива на странице
function renderList(arr) {

	listEl.innerHTML = ""
	document.querySelector(".height").append(listEl)

	for (let i = 0; i < arr.length; i++) {
		const liEl = document.createElement("li")
		liEl.classList.add("height__item")
		liEl.textContent = `${i + 1}) ${arr[i]}`
		listEl.append(liEl)
	}
}

// Рендерим массив heights на странице
renderList(heights)

const addHeightBtn = document.querySelector("#add_height")
addHeightBtn.onclick = addHeight

// Создаем функции для добавления новой книги в список (массив)
function addHeight() {

	let height = Number(prompt("Введите рост ученика"))

	if (height == "") {
		alert("Рост ученика не введен!")
	} else if (height === null) {

	} else if (height !== height) {
		alert("Рост должен быть числом!")
	} else {
		addElement(heights, height)
	}
}

function addElement(arr, element) {
	arr.push(element)
	renderList(arr)
}

// Создаем функции для фильтрации списке (массиве)
function filter(arr, criteria) {

	const result = []

	for (const item of heights) {
		if (item >= criteria) {
			result.push(item)
		}
	}

	return result
}

function filterHeight() {

	const filterCriteria = Number(prompt("Введите минимальный рост"))

	if (filterCriteria === null) {
		
	} else if (filterCriteria !== filterCriteria) {
		alert("Рост должен быть числом!")
	} else {
		renderList(filter(heights, filterCriteria))
	}

}

const filterHeightBtn = document.querySelector("#filter_height")
filterHeightBtn.onclick = filterHeight