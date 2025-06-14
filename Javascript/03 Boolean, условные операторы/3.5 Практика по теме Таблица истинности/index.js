let isSunny = true
let temperature = 11
let hasUmbrella = true
let picnic

if (isSunny && temperature >= 20 && temperature <= 30) {
	picnic = true
} else if (!isSunny && hasUmbrella && temperature < 15) {
	picnic = true
} else {
	picnic = false
}

console.log("Можно ли устроить пикник:", picnic)