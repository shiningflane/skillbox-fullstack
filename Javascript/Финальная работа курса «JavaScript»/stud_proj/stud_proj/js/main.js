import { } from './components/Buttons.js'
import { } from './components/DropdownMenu.js'
import { loadProducts } from './components/LoadProducts.js'
import { basketOpen } from './components/Basket.js'
import { renderCards, resetPage } from './components/RenderCards.js'
import { filterByStock, filterByTypes } from './components/Filters.js'
import { sortProducts } from './components/SortCards.js'
import { filterCheckboxCount } from './components/FilterCheckboxCount.js'
import { handleAccordion } from './components/Accordion.js'
import { initGoodsOfDay, initSlider } from './components/Slider.js'
import * as formValidation from './components/FormValidation.js'

// !Переделать архитектуру, чтобы фильтрация и сортировка делались по общему отфильтрованному
// !или отсортированному массиву

export let originalProducts = []
let currentProducts = []

let onlyInStock = false
let selectedTypes = []

let currentSort = 'price-min'

originalProducts = await loadProducts('./data/data.json')
currentProducts = [...originalProducts]

const inStockRadio = document.querySelector('.custom-radio__field#instock')
const allItemRadio = document.querySelector('.custom-radio__field#all-item')

const catalogForm = document.querySelector('.catalog-form')
const typeCheckboxes = catalogForm.querySelectorAll('.custom-checkbox__field')

const sortSelectEl = document.querySelector('.catalog__sort-select')

function recomputeAndRender() {
	let result = filterByStock(originalProducts, onlyInStock)
	result = filterByTypes(result, selectedTypes)
	result = sortProducts(result, currentSort)

	currentProducts = result
	resetPage()
	renderCards(currentProducts)
}

recomputeAndRender()

inStockRadio.addEventListener('change', () => {
	onlyInStock = true
	recomputeAndRender()
})

allItemRadio.addEventListener('change', () => {
	onlyInStock = false
	recomputeAndRender()
})

function updateSelectedTypes() {
	selectedTypes = Array.from(typeCheckboxes)
		.filter(cb => cb.checked)
		.map(cb => cb.value);
}

typeCheckboxes.forEach(cb => {
	cb.addEventListener('change', () => {
		updateSelectedTypes()
		recomputeAndRender()
	})
})

const resetFiltersEl = document.querySelector('.catalog-form__reset')

resetFiltersEl.addEventListener('click', function (e) {
	setTimeout(function () {
		updateSelectedTypes()
		recomputeAndRender()
	}, 0)

})

sortSelectEl.addEventListener('change', () => {
	currentSort = sortSelectEl.value
	recomputeAndRender()
})

filterCheckboxCount(currentProducts)

basketOpen()

handleAccordion()

initGoodsOfDay()
initSlider()
