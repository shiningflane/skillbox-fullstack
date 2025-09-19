const goods = ["Арбуз", "Книга", "Кофе", "Макароны", "Молоко", "Сахар", "Яблоки"]

// Создаем список с классом "goods__list"
const listEl = document.createElement("ul")
listEl.classList.add("goods__list")

// Создаем функцию для рендера элементов массива на странице
function renderList(arr) {

	listEl.innerHTML = ""
	document.querySelector(".goods").append(listEl)

	for (let i = 0; i < arr.length; i++) {
		const liEl = document.createElement("li")
		liEl.classList.add("goods__item")
		liEl.textContent = `${i + 1}) ${arr[i]}`
		listEl.append(liEl)
	}
}

// Рендерим массив goods на странице
renderList(goods)

const addGoodBtn = document.querySelector("#add_good")
addGoodBtn.onclick = addGood

// Создаем функции для добавления новой книги в список (массив)
function addGood() {

	let good = prompt("Введите название товара")

	if (good == "") {
		alert("Название товара не введено!")
	} else if (good === null) {

	} else {
		addElement(goods, good)
	}
}

function addElement(arr, element) {
	arr.push(element)
	renderList(sort(arr))
}

// Создаем функции для сортировки списка (массиве)
function sort(arr) {

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}

	return arr
}