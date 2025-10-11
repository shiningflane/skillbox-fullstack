// let image1 = document.querySelector("#dog1");
// let image2 = document.querySelector("#dog2");
// let image3 = document.querySelector("#dog3");
// let mainImage = document.querySelector('#gallery__main');

// image1.addEventListener('click', function (event) {
// 	imagePath = image1.getAttribute('src');
// 	imageAlt = image1.getAttribute('alt')
// 	mainImage.setAttribute('src', imagePath)
// 	mainImage.setAttribute('alt', imageAlt)
// });

// image2.addEventListener('click', function (event) {
// 	imagePath = image2.getAttribute('src');
// 	imageAlt = image2.getAttribute('alt')
// 	mainImage.setAttribute('src', imagePath)
// 	mainImage.setAttribute('alt', imageAlt)
// });

// image3.addEventListener('click', function (event) {
// 	imagePath = image3.getAttribute('src');
// 	imageAlt = image3.getAttribute('alt')
// 	mainImage.setAttribute('src', imagePath)
// 	mainImage.setAttribute('alt', imageAlt)
// });


// Сначала написал код выше, но потом понял, что много бесполезных повторений и решил переписать

let mainImage = document.querySelector('#gallery__main');
let miniImage = document.querySelectorAll('.gallery__mini');

miniImage.forEach(element => {
	element.addEventListener('click', function (event) {
		let imagePath = this.getAttribute('src');
		let imageAlt = this.getAttribute('alt');

		miniImage.forEach(elem => {
			elem.classList.remove('selected')
		})

		mainImage.setAttribute('src', imagePath);
		mainImage.setAttribute('alt', imageAlt);
		element.classList.add('selected')
	});
})