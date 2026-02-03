document.addEventListener('DOMContentLoaded', function (e) {
	const progressBar = document.querySelector('.progress-bar');

	function progress() {

		const seconds = Number(prompt('Укажите количество секунд'));

		const validSeconds = seconds > 2 ? seconds : 2;

		progressBar.style.transition = `transform ${validSeconds}s linear`
		progressBar.style.transform = `scaleX(1)`

		let currentSecond = 0;
		const timerElement = document.createElement('p');
		progressBar.after(timerElement);

		const timerInterval = setInterval(() => {
			if (currentSecond < validSeconds) {
				timerElement.textContent = `${++currentSecond} с`;
			} else {
				clearInterval(timerInterval);
			}
		}, 1000);
	}

	progress();
});