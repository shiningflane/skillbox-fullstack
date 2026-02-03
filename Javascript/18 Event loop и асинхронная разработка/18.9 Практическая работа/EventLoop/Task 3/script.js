document.addEventListener('DOMContentLoaded', function (e) {
	const app = document.querySelector('#app');

	function randomFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	function progress(seconds, progressBarId, timerId) {

		const validSeconds = seconds > 2 ? seconds : 2;

		const progressBar = document.createElement('div');
		progressBar.classList.add('progress-bar');
		progressBar.id = progressBarId;
		app.append(progressBar);

		requestAnimationFrame(() => {
			progressBar.style.transition = `transform ${validSeconds}s linear`;
			progressBar.style.transform = 'scaleX(1)';
		});

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

	const catsPics = new Promise((resolve, reject) => {

		const catsRandomInterval = randomFromInterval(2, 5)

		progress(catsRandomInterval, 'cats-progress');

		setTimeout(() => {
			const catsURLsArray = [
				'./img/cat1.jpg',
				'./img/cat2.jpg',
				'./img/cat3.jpg',
			]

			if (catsURLsArray.length > 0) {
				resolve(catsURLsArray);
			} else {
				reject(new Error('Массив изображений кошек пуст'))
			}
		}, catsRandomInterval * 1000);
	})
		.then((cats) => {
			const catsContainer = document.createElement('div');
			catsContainer.classList.add('img-container');
			cats.forEach(element => {
				const catPicture = document.createElement('img');
				catPicture.setAttribute('src', element);
				catsContainer.append(catPicture);
			});
			const catsProgressBar = document.querySelector('#cats-progress');
			catsProgressBar.before(catsContainer);
		})
		.then(() => {
			const dogsPics = new Promise((resolve, reject) => {

				const dogsRandomInterval = randomFromInterval(2, 5)

				progress(dogsRandomInterval, 'dogs-progress');

				setTimeout(() => {
					const dogsURLsArray = [
						'./img/dog1.jpg',
						'./img/dog2.jpg',
						'./img/dog3.jpg',
					]

					if (dogsURLsArray.length > 0) {
						resolve(dogsURLsArray);
					} else {
						reject(new Error('Массив изображений собак пуст'))
					}
				}, dogsRandomInterval * 1000);


			})
			return dogsPics;
		})
		.then((dogs) => {
			const dogsContainer = document.createElement('div');
			dogsContainer.classList.add('img-container');
			dogs.forEach(element => {
				const dogPicture = document.createElement('img');
				dogPicture.setAttribute('src', element);
				dogsContainer.append(dogPicture);
			});
			const dogsProgressBar = document.querySelector('#dogs-progress');
			dogsProgressBar.before(dogsContainer);
		})
});