function userAgeCheck(age) {
	if (Number(age) >= 18) {
		alert("Добро пожаловать на наш взрослый сайт!");
	} else {
		alert("Извините, доступ только для совершеннолетних");
	}
}

function processUserInput (callback) {
	const userAge = Number(prompt("Пожалуйста, введите ваш возраст"));
	callback(userAge);
}

processUserInput(userAgeCheck);