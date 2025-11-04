window.addEventListener('DOMContentLoaded', function (e) {
	setTimeout(() => {
		
		// Сгенерируем случайное число для выбора подарка
		function getRandomGiftNumber(array) {
			const max = array.length - 1;
			const min = 0;
			return Math.floor(Math.random() * (max - min + 1) + min);
		}
		// Запишем подарок в отдельную переменную
		let randomGift = giftArr[getRandomGiftNumber(giftArr)];
		// Отрисуем и отобразим попап пользователю
		function renderGift() {
			const popup = document.querySelector('.popup');
			const popupImage = document.querySelector('.popup__img');
			const popupText = document.querySelector('.popup__text');
			const popupButton = document.querySelector('#popup__btn');

			// Меняем картинку попапа
			popupImage.setAttribute('src', randomGift.icon)
			// Меняем текст попапа
			popupText.textContent = randomGift.title;
			// Отображаем попап
			popup.classList.add('flex')
			// Вешаем слушатель события на кнопку попапа
			popupButton.addEventListener('click', function (e) {
				popup.classList.remove('flex')
			});
		}
		renderGift()

		// Добавляем слушатель события на кнопку попапа
		document.addEventListener('click', function (e) {
			// body
		});

	}, 3000);
});

const giftArr = [
	{
		title: "Скидка 20% на первую покупку в нашем магазине!",
		icon: "/img/discount.svg"
	},
	{
		title: "Скидка 10% на всё!",
		icon: "/img/discount_2.svg"
	},
	{
		title: "Подарок при первой покупке в нашем магазине!",
		icon: "/img/gift.svg"
	},
	{
		title: "Бесплатная доставка для вас!",
		icon: "/img/delivery.svg"
	},
	{
		title: "Сегодня день больших скидок!",
		icon: "/img/discount_3.svg"
	}
]