document.addEventListener('DOMContentLoaded', function (e) {
	const app = document.querySelector('#app');

	function randomFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	const catsPics = new Promise((resolve, reject) => {

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
		}, randomFromInterval(2000, 5000));




	})


	const dogsPics = new Promise((resolve, reject) => {

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
		}, randomFromInterval(2000, 5000));


	})

	catsPics.then((cats) => {
		const catsContainer = document.createElement('div');
		cats.forEach(element => {
			const catPicture = document.createElement('img');
			catPicture.setAttribute('src', element);
			catsContainer.append(catPicture);
		});
		app.append(catsContainer);
	})

	dogsPics.then((dogs) => {
		const dogsContainer = document.createElement('div');
		dogs.forEach(element => {
			const dogPicture = document.createElement('img');
			dogPicture.setAttribute('src', element);
			dogsContainer.append(dogPicture);
		});
		app.append(dogsContainer);
	})
});

