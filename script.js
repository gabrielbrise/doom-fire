
const table = document.getElementById("fire-container")


const fireWidth = 8;
const fireHeight = 5;



const start = () => {

}

const createFireDataStructure = () => {
	const numberOfPixels = fireWidth * fireHeight
	// const firePixelsArray = [...Array(numberOfPixels)].fill(0)
	const aH = [...Array(fireHeight)]
	const aW = [...Array(fireWidth)]
	const firePixelsArray = [aH.map((_, index) => (aW.map((_, index) => index)))]
	console.log(firePixelsArray)
	return firePixelsArray

}

const calculateFirePropagation = () => {

}

const renderFire = () => {
	createFireDataStructure().map(cell => table.createTHead())
}

const createFirePixels = () => {
	for (i = 0; i < fireColumns; i++) {
		table.createTHead(i)
	}


}


// const createColumns = ({ table, columns }) => (
// 	fireColumnsArray.map((column, index) => {
// 		table.createTHead(index)
// 		columnCell.innerHTML = "0"
// 	})
// )

// const createRows = rows => (
// 	table.cr(fireRowsArray.map((row, index) => {
// 		const rowCell = table.insertRow(index)
// 		rowCell.innerHTML = "0"
// 		return rowCell
// 	}
// 	)
// 	)
// )

