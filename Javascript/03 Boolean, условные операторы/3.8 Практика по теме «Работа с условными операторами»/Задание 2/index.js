let maxPrice = 1000
let minPrice = 200
let price = Number(prompt("Введите цену"))

if (price > maxPrice) {
	console.log("Цена слишком большая")
} else if (price < minPrice) {
	console.log("Цена слишком маленькая")
} else {
	console.log("Цена нормальная")
}