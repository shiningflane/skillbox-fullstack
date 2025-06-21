const buttonEl = document.querySelector(".myButton");
const countEl = document.querySelector(".count");
buttonEl.onclick = counterIncrease;

function counterIncrease() {
	countEl.textContent = Number(countEl.textContent) + 1;
}