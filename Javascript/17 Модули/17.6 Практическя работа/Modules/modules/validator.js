export function initValidator(form) {
	const validate = new JustValidate(form);

	const nameField = form.querySelector('input[name="name"]');
	const placeField = form.querySelector('input[name="place"]');
	const weightField = form.querySelector('input[name="weight"]');
	const storageTimeField = form.querySelector('input[name="storageTime"]');


	validate
		.addField(nameField, [
			{
				rule: 'required',
				errorMessage: 'Название должно быть заполнено'
			},
			{
				rule: 'maxLength',
				value: 50,
				errorMessage: 'Название не более 50 символов'
			},
			{
				rule: 'minLength',
				value: 3,
				errorMessage: 'Название не менее 3 символов'
			}
		])
		.addField(placeField, [
			{
				rule: 'required',
				errorMessage: 'Место должно быть заполнено'
			},
			{
				rule: 'maxLength',
				value: 10,
				errorMessage: 'Место не более 10 символов'
			}
		])
		.addField(weightField, [
			{
				rule: 'required',
				errorMessage: 'Вес должен быть заполнен'
			},
			{
				rule: 'number',
				errorMessage: 'Вес должен быть числом'
			},
			{
				rule: 'minNumber',
				value: 0.01,
				errorMessage: 'Вес должен быть не менее 0.01'
			}
		])
		.addField(storageTimeField, [
			{
				rule: 'required',
				errorMessage: 'Время хранения должно быть заполнено'
			}
		])

	return validate;
}