const cartList = document.querySelector("#cart");


function addToCart(goodName) {
	const listItem = document.createElement("li");
	const spanItem = document.createElement("span");
	spanItem.textContent = goodName;
	listItem.prepend(spanItem);
	cartList.append(listItem);
}