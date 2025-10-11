const prices = [100, 500, 250, 750, 300];
const list = document.querySelector('.pricelist');
const buttonAsc = document.querySelector('#asc');
const buttonDesc = document.querySelector('#desc');

function renderList(array) {
	list.innerHTML = ''
	array.forEach(element => {
		const priceEl = document.createElement('li');
		priceEl.textContent = element;
		list.append(priceEl);
	});
}

renderList(prices);

buttonAsc.addEventListener('click', function (e) {
	prices.sort((a, b) => a - b)
	renderList(prices);
});

buttonDesc.addEventListener('click', function (e) {
	prices.sort((a, b) => b - a)
	renderList(prices);
});