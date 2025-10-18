window.addEventListener('DOMContentLoaded', function (e) {
	const form = document.querySelector('.calculator__form');

	// const productName = document.querySelector('.product__name');
	// const productWeight = document.querySelector('.product__weight');
	// const productDistance = document.querySelector('.product__distance');

	const product = {}

	const button = document.querySelector('.calculator__btn');

	form.addEventListener('submit', function (event) {
		event.preventDefault();

		const previousError = document.querySelector('.error');

		if (previousError) {
			previousError.remove();
		}

		product.name = document.querySelector('.product__name').value;
		product.weight = document.querySelector('.product__weight').valueAsNumber;
		product.distance = document.querySelector('.product__distance').valueAsNumber;
		product.shippingCost = (product.weight * product.distance) / 10

		validateForm(product.weight, product.distance);

		function validateForm(weight, distance) {
			if (Number(weight) <= 0 || Number(distance) <= 0) {
				const errorEl = document.createElement('p');
				errorEl.textContent = 'Пожалуйста, введите корректные значения для веса и расстояния'
				errorEl.classList.add('error');
				form.append(errorEl);
			} else {
				renderTableRow();
			}
		}

		function renderTableRow() {
			const tableBody = document.querySelector('.product-table__body');
			const newTableRow = document.createElement('tr');

			Object.values(product).forEach(element => {
				const newTableData = document.createElement('td');
				newTableData.textContent = element;
				newTableRow.append(newTableData);
			})

			tableBody.append(newTableRow);
			
			form.reset();
		}

	});






});