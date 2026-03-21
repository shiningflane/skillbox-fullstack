export function sortProducts(products, sortKey) {
	const arr = [...products]

	switch (sortKey) {
		case 'price-min':
			return arr.sort((a, b) => a.price.new - b.price.new)
			
		case 'price-max':
			return arr.sort((a, b) => b.price.new - a.price.new)

		case 'rating-max':
			return arr.sort((a, b) => b.rating - a.rating)
	
		default:
			return arr
	}
}