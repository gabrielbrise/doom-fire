
const table = document.getElementById("fire-container")
const fireWidth = 25;
const fireHeight = 15;

const start = () => {

}

const createFireDataStructure = () => {

	const aH = [...Array(fireHeight)].fill(0)
	const rows = aH.map((row, index) => row = { index })
	console.log(rows)
	const aW = [...Array(fireWidth)]
	const columns = aW.map((column, index) => column = { index })
	console.log(columns)
	const firePixelsArray = [...rows.map((row, rowIndex) => (columns.map((cell, columnIndex) => cell = { index: columnIndex + (rowIndex * fireWidth) })))]
	console.log(firePixelsArray)
	return firePixelsArray
}

const calculateFirePropagation = () => {

}

const renderFire = () => {
	console.time('funcional')
	const dataStructure = createFireDataStructure()
	const log = dataStructure.map((nested, rowIndex) => {
		let row = table.insertRow(table.length - 1)
		nested.map((_, columnIndex) => {
			let cell = row.insertCell(columnIndex)
			cell.innerHTML = _.index
		})
	})
	console.timeEnd('funcional')
}