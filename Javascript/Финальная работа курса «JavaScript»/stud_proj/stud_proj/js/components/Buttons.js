export const burgerToggle = () => {
	const burgerOpenButton = document.querySelector('.header__catalog-btn')
	const burgerCloseButton = document.querySelector('.main-menu__close')
	const burgerMenu = document.querySelector('.main-menu')

	burgerOpenButton.addEventListener('click', function (e) {
		e.preventDefault()
		burgerMenu.classList.toggle('main-menu--active')
	})

	burgerCloseButton.addEventListener('click', function (e) {
		e.preventDefault()
		burgerMenu.classList.toggle('main-menu--active')
	})
}

burgerToggle()