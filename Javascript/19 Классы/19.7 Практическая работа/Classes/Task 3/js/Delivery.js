export default class Delivery {

	constructor(name, address, distance) {
		this._name = name
		this._address = address
		this._distance = distance
	}

	get name() {
		return this._name
	}

	set name(value) {
		if (value) {
			this._name = value
		}
	}
	get address() {
		return this._address
	}

	set address(value) {
		if (value) {
			this._address = value
		}
	}
	get distance() {
		return this._distance
	}

	set distance(value) {
		if (value) {
			this._distance = value
		}
	}

	getCard() {
		this.cardEl = document.createElement('div')
		this.cardEl.classList.add('delivery__card')

		const nameElement = this.getCardElement('Имя', this._name)
		const addressElement = this.getCardElement('Адрес', this._address)
		const distanceElement = this.getCardElement('Расстояние', `${this._distance} км`)

		this.cardEl.append(nameElement, addressElement, distanceElement)

		return this.cardEl
	}

	getCardElement(label, value) {
		const element = document.createElement('div')
		element.classList.add('delivery__card-group')

		const elementLabel = document.createElement('p')
		elementLabel.classList.add('delivery__card-label')
		elementLabel.textContent = label

		const elementValue = document.createElement('p')
		elementValue.classList.add('delivery__card-value')
		elementValue.textContent = value

		element.append(elementLabel, elementValue)

		return element
	}
}