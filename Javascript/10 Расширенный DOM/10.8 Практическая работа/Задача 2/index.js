const buttonAdd = document.querySelector('#add');
const buttonDelete = document.querySelector('#delete');
const list = document.querySelector('.list__elements');

buttonAdd.addEventListener('click', function (event) {
	const listEl = document.createElement('li');
	listEl.textContent = 'Новый элемент списка';
	list.append(listEl)
});

buttonDelete.addEventListener('click', function (event) {
	list.lastElementChild.remove()
});