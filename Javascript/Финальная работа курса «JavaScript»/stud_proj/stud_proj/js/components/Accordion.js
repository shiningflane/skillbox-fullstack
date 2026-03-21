export function handleAccordion() {
	const accordionBlock = document.querySelector('.faq__accordion')
	if(!accordionBlock) return

	const accordionElements = accordionBlock.querySelectorAll('.accordion__btn')

	accordionElements.forEach((item) => {
		item.addEventListener('click', function (e) {
			e.preventDefault()

			const isOpened = this.classList.contains('accordion__btn--active')

			const accordionOpenedElements = accordionBlock.querySelectorAll('.accordion__btn--active')
			if (accordionOpenedElements) {
				accordionOpenedElements.forEach((item) => {
					item.classList.remove('accordion__btn--active')
				})
			}

			if (!isOpened) {
				this.classList.add('accordion__btn--active')
			}

		})
	})
}
