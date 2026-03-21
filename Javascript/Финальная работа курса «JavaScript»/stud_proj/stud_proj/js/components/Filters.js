export function filterByStock(products, onlyInStock) {
	if (!onlyInStock) return products

	return products.filter(item =>
		Object.values(item.availability).some(av => av > 0)
	)
}

export function filterByTypes(products, types) {
	if (!types.length) return products

	return products.filter(product =>
		product.type.some(type => types.includes(type))
	)
}