import Card from './Card.js'

const cardsPerPage = 6

let currentPage = 1
let currentData = []

const catalogListEl = document.querySelector('.catalog__list')
const paginationListEl = document.querySelector('.catalog__pagination')

export function renderPagination() {
	const totalPages = Math.ceil(currentData.length / cardsPerPage)

	paginationListEl.innerHTML = ''

	if (totalPages <= 1) return

	for (let i = 1; i <= totalPages; i++) {
		const paginationListItem = document.createElement('li')
		paginationListItem.classList.add('catalog__pagination-item')
		
		const paginationButton = document.createElement('button')
		paginationButton.classList.add('catalog__pagination-link')
		paginationButton.textContent = i

		if (i === currentPage) {
			paginationButton.classList.add('catalog__pagination-link--active')
			paginationButton.disabled = true
		}

		paginationButton.addEventListener('click', () => {
			currentPage = i
			render()
		})

		paginationListItem.append(paginationButton)
		paginationListEl.append(paginationListItem)
	}
}

export function render() {
	catalogListEl.innerHTML = ''

	const start = (currentPage - 1) * cardsPerPage
	const end = start + cardsPerPage
	const pageItems = currentData.slice(start, end)

	pageItems.forEach((element) => {
		catalogListEl.append(new Card(element).getCard())
	})

	renderPagination()
}


export function renderCards(data) {

	currentData = data

	const totalPages = Math.max(1, Math.ceil(currentData.length / cardsPerPage))

	if (currentPage > totalPages) currentPage = totalPages
	if (currentPage < 1) currentPage = 1

	render()
}

export function resetPage() {
	currentPage = 1
}