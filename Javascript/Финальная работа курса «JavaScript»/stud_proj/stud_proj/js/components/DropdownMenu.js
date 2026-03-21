export function dropdownCityHandler() {
	const cityDropdownButton = document.querySelector('.location__city')
	const cityDropdownText = document.querySelector('.location__city-name')
	const cityDropdownList = document.querySelector('.location__sublist')
	// const cityDropdownListButton = document.querySelectorAll('.location__city-name')

	cityDropdownButton.addEventListener('click', function (e) {
		e.preventDefault()
		cityDropdownButton.classList.toggle('location__city--active')
	})

	cityDropdownList.addEventListener('click', function (e) {
		e.preventDefault()
		if (e.target.classList.contains('location__sublink')) {
			cityDropdownText.textContent = e.target.textContent
			cityDropdownButton.classList.toggle('location__city--active')

		}
	})
}

dropdownCityHandler()