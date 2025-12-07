function greeting() {
	const username = prompt("Введите имя пользователя");
	if (!username) {
		throw usernameError;
	}
}
const usernameError = new Error('Имя обязательно для заполнения');
try {
	greeting();
} catch (error) {
	alert(usernameError.message);
}