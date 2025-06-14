let freeBoxOffice

freeBoxOffice = Number(prompt("Введите номер свободной кассы"))

switch (freeBoxOffice) {
	case 1:
	case 2:
	case 3:
	case 4:
		console.log("Свободная касса №", freeBoxOffice)
		break;

	default:
		console.log("Все кассы заняты")
		break;
}