export async function loadProducts(path) {
	if (!path) {
		return
	}

	const response = await fetch(path)

	if (!response.ok) {
		throw new Error(`HTTP ошибка: ${response.status}`)
	}

	return await response.json()
}