export function basketOpen() {
	const basketButton = document.querySelector('#basket-button')

	basketButton.addEventListener('click', function (e) {
		const basketEl = document.querySelector('.basket')
		basketEl.classList.toggle('basket--active')
	})
}

export async function handleBasket(data) {
	const { originalProducts } = await import('../main.js')
	const [product] = originalProducts.filter((item) => item.id == data)
	const basketList = document.querySelector('.basket__list')
	const basketEmptyBlock = document.querySelector('.basket__empty-block')
	const basketCounter = document.querySelector('#basket-counter')
	const basketEl = document.querySelector('.basket')


	const basketProduct = document.createElement('li')
	basketProduct.classList.add('basket__item')
	basketProduct.innerHTML = `
	<div class="basket__img">
                  <img src="${product.image}" alt="Фотография товара" height="60" width="60">
                </div>
                <span class="basket__name">${product.name}</span>
                <span class="basket__price">${product.price.new} руб</span>
                <button class="basket__item-close" type="button">
                  <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
                    <use xlink:href="images/sprite.svg#icon-close"></use>
                  </svg>
                </button>
	`

	const basketProductRemoveButton = basketProduct.querySelector('.basket__item-close')
	basketProductRemoveButton.addEventListener('click', function (e) {
		e.preventDefault()
		basketProduct.remove()
		basketCounter.textContent--
		if (!basketList.hasChildNodes()) {
			basketEmptyBlock.classList.remove('visually-hidden')
			basketEl.querySelector('.basket__link').remove()
		}
	})

	basketList.append(basketProduct)


	basketCounter.textContent++

	if (basketList.hasChildNodes()) {
		basketEmptyBlock.classList.add('visually-hidden')

		if (basketEl.querySelector('.basket__link')) {

		} else {
			const processBasketLink = document.createElement('a')
			processBasketLink.classList.add('basket__link', 'btn')
			processBasketLink.href = '#'
			processBasketLink.textContent = 'Перейти к оформлению'

			basketEl.append(processBasketLink)
		}
	}
}