export function filterCheckboxCount(data) {
	const checkboxes = document.querySelectorAll('.custom-checkbox__field')
	let filterCheckboxes = []

	checkboxes.forEach(element => {
		if (element.closest('.catalog-form')) {
			filterCheckboxes.push(element)
		}
	})

	filterCheckboxes.forEach(element => {
		let typeConcurrenceCount = 0

		data.filter(item => {
			item.type.filter(e => {
				if (e == element.id) {
					typeConcurrenceCount++
				}
			})
			
		})
		
		document.querySelector(`.custom-checkbox:has(#${element.id}.custom-checkbox__field) .custom-checkbox__count`).textContent = typeConcurrenceCount
		
	})

}