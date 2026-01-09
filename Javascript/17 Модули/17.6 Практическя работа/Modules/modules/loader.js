export default function getLoader() {
	const loaderElement = document.createElement('span');
	loaderElement.classList.add('loader');
	return loaderElement;
}