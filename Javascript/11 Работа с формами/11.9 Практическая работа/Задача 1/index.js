window.addEventListener('DOMContentLoaded', function (e) {
	
	const formEl = document.querySelector('.form');
	const buttonEl = document.querySelector('.button');

	formEl.addEventListener('submit', function (e) {
		e.preventDefault();

		// Получаем результаты заполнения формы
		const userName = document.querySelector('.username').value;
		const email = document.querySelector('.email').value;
		const selectedSex = document.querySelector('.sex-radio:checked');
		const sex = selectedSex ? selectedSex.value : "Не указан"
		const service = document.querySelector('.service').value;
		const selectedInterests = document.querySelectorAll('.interest:checked');
		const interests = [];

		selectedInterests.forEach(element => {
			interests.push(element.parentElement.textContent.trim())
		})

		const comments = document.querySelector('.textarea').value;

		const formResult = document.querySelector('.form-result');

		// Создаем блок с результатом заполнения формы
		const resultHTML = 
		`
		<h2>Результаты опроса</h2>
		<p>Имя пользователя: ${userName}</p>
		<p>Email: ${email}</p>
		<p>Пол: ${sex == 'men' ? 'Мужской' : sex === 'women' ? 'Женский' : sex}</p>
		<p>Оценка сервиса: ${service}</p>
		<p>Интересы пользователя: ${interests.length == 0 ? 'Не указаны' : interests.join(', ')}</p>
		<p>Дополнительные комментарии: ${comments}</p>
		`

		formResult.innerHTML = resultHTML;
	});
});