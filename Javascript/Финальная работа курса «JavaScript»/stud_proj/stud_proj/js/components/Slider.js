import { originalProducts } from "../main.js";
import Card from "./Card.js";

export function initGoodsOfDay() {
	const goodsOfDay = originalProducts.filter((item) => item.goodsOfDay === true)

	const goodsOfDayBlock = document.querySelector('.day-products__list')

	goodsOfDay.forEach((element) => {
		const goodsOfDayEl = document.createElement('li')
		goodsOfDayEl.classList.add('day-products__item', 'swiper-slide')

		goodsOfDayEl.append(new Card(element).getCard())
		goodsOfDayBlock.append(goodsOfDayEl)
	})
}

export function initSlider() {

	const sliderPrev = document.querySelector('.day-products__navigation-btn--prev')
	const sliderNext = document.querySelector('.day-products__navigation-btn--next')

	const swiper = new Swiper('.swiper', {
		navigation: {
			prevEl: sliderPrev,
			nextEl: sliderNext,
		},
		speed: 400,
		spaceBetween: 40,
		slidesPerView: 4,
	})


}