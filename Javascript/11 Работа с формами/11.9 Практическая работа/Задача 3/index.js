window.addEventListener('DOMContentLoaded', function (e) {
	const cardText = document.querySelector('.card-text');
	const cardColor = document.querySelector('.card-color');
	const bankCardText = document.querySelector('.bank-card__element');

	cardText.addEventListener('input', function (e) {
		bankCardText.textContent = cardText.value;
	});

	cardText.addEventListener('focus', function (e) {
		cardText.classList.add('focused')
	});

	cardText.addEventListener('blur', function (e) {
		cardText.classList.remove('focused')
	});

	cardColor.addEventListener('change', function (e) {

		switch (cardColor.value) {
			case 'red':
				bankCardText.setAttribute('style', 'background-color: red');
				break;
			case 'blue':
				bankCardText.setAttribute('style', 'background-color: blue');
				break;
			case 'green':
				bankCardText.setAttribute('style', 'background-color: green');
				break;
		
			default:
				break;
		}
	});
});