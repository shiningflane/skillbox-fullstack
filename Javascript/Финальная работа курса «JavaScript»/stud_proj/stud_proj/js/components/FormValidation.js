const form = document.querySelector('.questions__form')
const successDialog = document.querySelector('.questions__form-modal.modal--success')
const errorDialog = document.querySelector('.questions__form-modal.modal--error')

const successCloseBtn = successDialog.querySelector('.modal__close')
const errorCloseBtn = errorDialog.querySelector('.modal__close')

function openDialog(dialog) {
	if (dialog.showModal) {
		dialog.showModal()
	} else {
		dialog.setAttribute('open', '')
	}
}

function closeDialog(dialog) {
	if (dialog.close) {
		dialog.close()
	} else {
		dialog.removeAttribute('open')
	}
}

successCloseBtn.addEventListener('click', () => closeDialog(successDialog))
errorCloseBtn.addEventListener('click', () => closeDialog(errorDialog))

const validate = new JustValidate('.questions__form')

validate
	.addField('#name', [
		{
			rule: 'required',
			errorMessage: 'Введите ваше имя',
		},
		{
			rule: 'minLength',
			value: 3,
			errorMessage: 'Минимальная длина имени 3 символа',
		},
		{
			rule: 'maxLength',
			value: 20,
			errorMessage: 'Максимальная длина имени 20 символов',
		}
	])
	.addField('#email', [
		{
			rule: 'required',
			errorMessage: 'Введите вашу почту',
		},
		{
			rule: 'email',
			errorMessage: 'Почта введена неверно',
		}
	])
	.addField('#agree', [
		{
			rule: 'required',
			errorMessage: 'Согласие обязательно'
		}
	])
	.onSuccess(async (e) => {
		e.preventDefault()

		const formData = new FormData(form)

		try {
			const response = await fetch('https://httpbin.org/post', {
				method: 'POST',
				body: formData,
			})

			if (!response.ok) {
				throw new Error('Ошибка отправки данных формы на сервер')
			}

			openDialog(successDialog)
			form.reset()
		} catch (error) {
			openDialog(errorDialog)
		}
	})

