import Delivery from "./Delivery.js"
import { renderDeliveries } from "./index.js"

export default class EditDelivery extends Delivery {
	constructor(name, address, distance, status) {
		super(name, address, distance)
		this._status = status
	}

	get status() {
		return this._status
	}

	set status(value) {
		if (value) {
			this._status = value
		}
	}

	getCard() {

		this.cardEl = super.getCard()
		this.cardEl.prepend(this.getAddEditButton())
		this.cardEl.classList.add('delivery__card', 'delivery__card--centered')

		switch (this._status) {
			case 'delivered': {
				this.cardEl.classList.add('delivery__card--delivered')
				break
			}

			case 'canceled': {
				this.cardEl.classList.add('delivery__card--canceled')
				break
			}

			default:
				break;
		}

		return this.cardEl
	}

	getAddEditButton() {
		this.editButton = document.createElement('button')
		this.editButton.classList.add('delivery__card-button')
		this.editButton.textContent = 'Изменить'

		this.editButton.addEventListener('click', () => {
			document.querySelector('#app').append(this.getDialog())

			this.nameInput.value = this._name
			this.addressInput.value = this._address
			this.distanceInput.value = this._distance
			this.statusSelect.value = this._status

			this.dialogEl.showModal()
		})

		return this.editButton
	}

	getDialog() {
		const dialogEl = document.createElement('dialog')
		dialogEl.classList.add('dialog__window')
		dialogEl.id = 'edit-delivery-dialog'

		dialogEl.addEventListener('submit', (e) => {
			e.preventDefault()
			this.handleSubmit()
		});

		const cancelButton = document.createElement('button')
		cancelButton.classList.add('dialog__cancel-button')
		cancelButton.type = 'button'
		cancelButton.textContent = '❌'
		cancelButton.addEventListener('click', () => {
			dialogEl.close()
			dialogEl.remove()
		});

		const formEl = document.createElement('form')
		formEl.classList.add('dialog__form')
		formEl.id = 'edit-delivery-form'
		formEl.method = 'dialog'

		const h2El = document.createElement('h2')
		h2El.classList.add('dialog__h2')
		h2El.textContent = 'Изменить'

		this.nameInput = document.createElement('input')
		this.nameInput.classList.add('dialog__input')
		this.nameInput.type = 'text'
		this.nameInput.placeholder = 'Имя'

		this.addressInput = document.createElement('input')
		this.addressInput.classList.add('dialog__input')
		this.addressInput.type = 'text'
		this.addressInput.placeholder = 'Адрес'

		this.distanceInput = document.createElement('input')
		this.distanceInput.classList.add('dialog__input')
		this.distanceInput.type = 'number'
		this.distanceInput.placeholder = 'Расстояние'

		this.statusSelect = document.createElement('select')
		this.statusSelect.classList.add('dialog__select')
		this.statusSelect.id, this.statusSelect.name = 'edit-delivery-select'

		const statusOption1 = document.createElement('option')
		statusOption1.value = 'delivery'
		statusOption1.textContent = 'Доставляется'

		const statusOption2 = document.createElement('option')
		statusOption2.value = 'delivered'
		statusOption2.textContent = 'Доставлен'

		const statusOption3 = document.createElement('option')
		statusOption3.value = 'canceled'
		statusOption3.textContent = 'Отменен'

		const confirmButton = document.createElement('button')
		confirmButton.type = 'submit'
		confirmButton.classList.add('dialog__confirm-button')
		confirmButton.textContent = 'Сохранить'

		this.statusSelect.append(statusOption1, statusOption2, statusOption3)
		formEl.append(h2El, this.nameInput, this.addressInput, this.distanceInput, this.statusSelect, confirmButton)
		dialogEl.append(cancelButton, formEl)

		this.dialogEl = dialogEl

		return this.dialogEl
	}

	handleSubmit() {
		this.name = this.nameInput.value
		this.address = this.addressInput.value
		this.distance = this.distanceInput.value
		this.status = this.statusSelect.value

		this.dialogEl.close()
		this.dialogEl.remove()

		renderDeliveries()
	}
}