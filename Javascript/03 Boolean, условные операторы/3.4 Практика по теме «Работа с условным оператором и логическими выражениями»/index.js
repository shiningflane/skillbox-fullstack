const passwordCurrent = "qwerty"
let passwordNew = prompt("Введите новый пароль")

if (passwordNew == passwordCurrent) {
	console.log("Пароли совпадают")
} else {
	console.log("Пароли не совпадают")
}