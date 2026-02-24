import Delivery from './Delivery.js'

const app = document.querySelector('#app');

const deliveryArr = [
	new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
	new Delivery("Дмитрий", "ул. Задачная, д. 7", 3),
	new Delivery("Оля", "ул. Ткачей, д. 43", 11)
];

const container = document.createElement('div')
container.classList.add('container')

const deliveryCards = document.createElement('div')
deliveryCards.classList.add('delivery__cards')
app.append(container)
container.append(deliveryCards)

deliveryArr.forEach(element => {
	deliveryCards.append(element.getCard())
});