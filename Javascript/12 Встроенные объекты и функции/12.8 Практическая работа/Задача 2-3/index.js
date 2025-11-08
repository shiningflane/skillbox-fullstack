// Слушатель события на ввод в форму, uppercase
// Слушатель события на отправку формы → сверка введенного промокода с промокодом в объекте

const promocodeArr = [
	{
		promocode: 'PROM10',
		gift: "Скидка 10%"
	},
	{
		promocode: 'PROM50',
		gift: "Скидка 50%"
	},
	{
		promocode: 'GIFT',
		gift: "Подарок в корзине"
	}
]

// Если введённый в текстовое поле промокод совпадает со значением в объекте, должно быть показано сообщение
// об активации промокода и предоставленном подарке. Внешний вид формы должен измениться как в примере

// Если промокод введён неверно (то есть не совпадает со значением в объекте),
// форма должна принять свой изначальный вид без сообщения.

// Важно! Успешно введённый промокод должен сохраниться в cookie браузера 
// и при повторной загрузке страницы должен быть автоматически записан в форму.
// Форма должна иметь внешний вид применённого промокода с сообщением об активации и подарке. 
// Это позволит пользователю сайта избежать повторного введения промокода.

// Вспомогательная функция для получения данных из куки
function getCookie() {
	return document.cookie.split('; ').reduce((acc, item) => {
		const [name, value] = item.split('=')
		acc[name] = value
		return acc
	}, {})
}

function findLastPromo() {
	const keys = Object.keys(cookie);
	for (let i = keys.length - 1; i >= 0; i--) {
		if (keys[i] == 'promo') {
			return lastPromo = cookie[keys[i]];
		}
	}
	return undefined
}

const cookie = getCookie();
let lastPromo;



document.addEventListener('DOMContentLoaded', function (e) {
	// Объявляем переменные для элементов

	const form = document.querySelector('.promo__form');
	const formInput = document.querySelector('.promo__text');
	const formButton = document.querySelector('.btn');
	const formInfo = document.querySelector('.promo__info');




	// Делаем Uppercase для вводимых в input значений

	formInput.addEventListener('input', function (e) {
		formInput.value = formInput.value.toUpperCase()
	});

	// Слушатель события на отправку формы

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		const result = {}

		promocodeArr.forEach(item => {
			if (item.promocode == formInput.value) {
				result.promocode = item.promocode;
				result.gift = item.gift;
				console.log(result);
			}
		})

		if (Object.entries(result).length !== 0) {
			formInput.classList.add('success');
			formInfo.textContent = `Промокод применён. ${result.gift}`;
			document.cookie = `promo=${result.promocode}`
		} else {
			formInput.classList.remove('success');
			formInfo.textContent = '';
		}
	});

	// Проверяем наличие cookie

	function renderPromo() {
		if (findLastPromo() !== undefined) {
			formInput.value = lastPromo;
			form.dispatchEvent(new Event('submit'));
		}
	}

	renderPromo();
});