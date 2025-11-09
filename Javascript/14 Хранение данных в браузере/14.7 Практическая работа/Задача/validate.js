const validate = new JustValidate('#film-form');

validate.addField('#title', [
	{
		rule: 'required',
		errorMessage: 'Введите название фильма'
	},
	{
		rule: 'maxLength',
		value: 50,
		errorMessage: 'Название не более 50 символов'
	}
]);

validate.addField('#genre', [
	{
		rule: 'required',
		errorMessage: 'Введите название жанра'
	},
	{
		rule: 'maxLength',
		value: 20,
		errorMessage: 'Название не более 20 символов'
	}
]);

validate.addField('#releaseYear', [
	{
		rule: 'required',
		errorMessage: 'Введите год'
	},
	{
		rule: 'maxLength',
		value: 4,
		errorMessage: 'Максимум символов - 4'
	},
	{
		rule: 'number',
		errorMessage: 'Введите число'
	}
]);
