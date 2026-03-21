import { handleBasket } from "./Basket.js"

export default class Card {
	constructor(object) {
		Object.assign(this, object)
	}

	getCard() {

		// !Сначала начал создавать все компоненты прямо в JS, когда почти закончил, понял
		// !Что не было запрета использовать .innetHTML, но решил все таки дописать в JS,
		// !для практики, но не стал уже выделять методы для каждого элемента карточки

		this.listEl = document.createElement('li')
		this.listEl.classList.add('catalog__item')

		const cardEl = document.createElement('div')
		cardEl.classList.add('product-card')

		const cardVisualEl = document.createElement('div')
		cardVisualEl.classList.add('product-card__visual')

		const cardImgEl = document.createElement('img')
		cardImgEl.classList.add('product-card__img')
		cardImgEl.height = 436
		cardImgEl.width = 290
		cardImgEl.alt = 'Изображение товара'
		cardImgEl.src = this.image

		const cardMoreEl = document.createElement('div')
		cardMoreEl.classList.add('product-card__more')

		const cardAddToBasketLinkEl = document.createElement('a')
		cardAddToBasketLinkEl.href = '#'
		cardAddToBasketLinkEl.classList.add('product-card__link', 'btn', 'btn--icon')
		cardAddToBasketLinkEl.dataset.id = this.id
		cardAddToBasketLinkEl.addEventListener('click', (e) => {
			e.preventDefault()
			handleBasket(this.id)
		})

		const cardAddToBasketTextEl = document.createElement('span')
		cardAddToBasketTextEl.classList.add('btn__text')
		cardAddToBasketTextEl.textContent = 'В корзину'

		const cardAddToBasketSvgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

		cardAddToBasketSvgEl.ariaHidden = 'true'
		cardAddToBasketSvgEl.setAttribute('width', '24')
		cardAddToBasketSvgEl.setAttribute('height', '24')

		// const cardAddToBasketSvgUseEl = document.createElement('use')
		const cardAddToBasketSvgUseEl = document.createElementNS('http://www.w3.org/2000/svg', 'use')
		// cardAddToBasketSvgUseEl.href = 'images/sprite.svg#icon-basket'
		cardAddToBasketSvgUseEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'images/sprite.svg#icon-basket')

		const cardMoreLinkEl = document.createElement('a')
		cardMoreLinkEl.href = '#'
		cardMoreLinkEl.classList.add('product-card__link', 'btn', 'btn--secondary')

		const cardMoreTextEl = document.createElement('span')
		cardMoreTextEl.classList.add('btn__text')
		cardMoreTextEl.textContent = 'Подробнее'

		const cardInfoEl = document.createElement('div')
		cardInfoEl.classList.add('product-card__info')

		const cardTitleEl = document.createElement('h2')
		cardTitleEl.classList.add('product-card__title')
		cardTitleEl.textContent = this.name

		const cardPriceOldEl = document.createElement('span')
		cardPriceOldEl.classList.add('product-card__old')

		const cardPriceOldNumberEl = document.createElement('span')
		cardPriceOldNumberEl.classList.add('product-card__old-number')
		cardPriceOldNumberEl.textContent = this.price.old.toLocaleString('ru-RU')

		const cardPriceOldAddEl = document.createElement('span')
		cardPriceOldAddEl.classList.add('product-card__old-add')
		cardPriceOldAddEl.textContent = ' ₽'

		const cardPriceNewEl = document.createElement('span')
		cardPriceNewEl.classList.add('product-card__price')

		const cardPriceNewNumberEl = document.createElement('span')
		cardPriceNewNumberEl.classList.add('product-card__price-number')
		cardPriceNewNumberEl.textContent = this.price.new.toLocaleString('ru-RU')

		const cardPriceNewAddEl = document.createElement('span')
		cardPriceNewAddEl.classList.add('product-card__price-add')
		cardPriceNewAddEl.textContent = ' ₽'

		const cardTooltipEl = document.createElement('div')
		cardTooltipEl.classList.add('product-card__tooltip', 'tooltip')

		const cardTooltipButtonEl = document.createElement('button')
		cardTooltipButtonEl.classList.add('tooltip__btn')
		cardTooltipButtonEl.ariaLabel = 'Показать подсказку'

		const cardTooltipSvgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
		cardTooltipSvgEl.classList.add('tooltip__icon')
		cardTooltipSvgEl.setAttribute('width', '5')
		cardTooltipSvgEl.setAttribute('height', '10')
		cardTooltipSvgEl.ariaHidden = 'true'

		const cardTooltipSvgUseEl = document.createElementNS('http://www.w3.org/2000/svg', 'use')
		cardTooltipSvgUseEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'images/sprite.svg#icon-i')

		const cardTooltipContentEl = document.createElement('div')
		cardTooltipContentEl.classList.add('tooltip__content')

		cardTooltipContentEl.innerHTML = `
		<span class="tooltip__text">Наличие товара по городам:</span>
			<ul class="tooltip__list">
				<li class="tooltip__item">
					<span class="tooltip__text">Москва: <span class="tooltip__count">${this.availability.moscow}</span></span>
				</li>
				<li class="tooltip__item">
					<span class="tooltip__text">Оренбург: <span class="tooltip__count">${this.availability.orenburg}</span></span>
				</li>
				<li class="tooltip__item">
					<span class="tooltip__text">Санкт-Петербург: <span class="tooltip__count">${this.availability.saintPetersburg}</span></span>
				</li>
			</ul>
		`

		tippy(cardTooltipButtonEl, {
			content: cardTooltipContentEl,
			allowHTML: true,
			interactive: true,
			placement: 'top',
			theme: 'lightwhite',
		})
		
		cardMoreLinkEl.append(cardMoreTextEl)
		cardAddToBasketSvgEl.append(cardAddToBasketSvgUseEl)
		cardAddToBasketLinkEl.append(cardAddToBasketTextEl, cardAddToBasketSvgEl)
		cardMoreEl.append(cardAddToBasketLinkEl, cardMoreLinkEl)
		cardVisualEl.append(cardImgEl, cardMoreEl)

		cardPriceOldEl.append(cardPriceOldNumberEl, cardPriceOldAddEl)
		cardPriceNewEl.append(cardPriceNewNumberEl, cardPriceNewAddEl)

		cardTooltipSvgEl.append(cardTooltipSvgUseEl)

		cardTooltipButtonEl.append(cardTooltipSvgEl)

		cardTooltipEl.append(cardTooltipButtonEl)

		cardInfoEl.append(cardTitleEl, cardPriceOldEl, cardPriceNewEl, cardTooltipEl)

		cardEl.append(cardVisualEl, cardInfoEl)

		this.listEl.append(cardEl)

		return this.listEl
	}

}

