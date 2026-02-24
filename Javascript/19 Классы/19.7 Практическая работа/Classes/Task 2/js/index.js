import EditDelivery from './EditDelivery.js'

const app = document.querySelector('#app');

export const deliveryArr = [
	new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
	new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
	new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled")
];

const container = document.createElement('div')
container.classList.add('container')

export const deliveryCards = document.createElement('div')
deliveryCards.classList.add('delivery__cards')

app.append(container)
container.append(deliveryCards)

// deliveryArr.forEach(element => {
// 	console.log(element);
// 	deliveryCards.append(element.getCard())
// })

export function renderDeliveries() {
	deliveryCards.innerHTML = ''
	deliveryArr.forEach(item => {
		deliveryCards.append(item.getCard())
	})
}

renderDeliveries();