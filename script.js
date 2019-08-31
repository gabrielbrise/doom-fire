const table = document.getElementById("fire-container");
const fireWidth = 25;
const fireHeight = 15;
let dataStructure = [];

const start = () => {
  createFireDataStructure();
  createFireSource();
  renderFire();
};

const createFireDataStructure = () => {
  const aH = [...Array(fireHeight)].fill(0);
  const rows = aH.map((row, index) => (row = { index }));
  const aW = [...Array(fireWidth)];
  const columns = aW.map((column, index) => (column = { index }));
  dataStructure = [
    ...rows.map((row, rowIndex) =>
      columns.map(
        (cell, columnIndex) =>
          (cell = { index: columnIndex + rowIndex * fireWidth, intensity: 0 })
      )
    )
  ];
};

const createFireSource = () => {
  const firstRow = dataStructure[0];
  const setFire = firstRow.map(cell => (cell = { ...cell, intensity: 36 }));
  dataStructure[0] = setFire;
};

const calculateFirePropagation = () => {
  dataStructure.map(row => {});
};

const renderFire = () => {
  console.time("funcional");
  const log = dataStructure.map((nested, rowIndex) => {
    let row = table.insertRow(table.length - 1);
    nested.map((_, columnIndex) => {
      let cell = row.insertCell(columnIndex);
      cell.dataset.index = _.index;
      cell.innerHTML = _.intensity;
    });
  });
  console.timeEnd("funcional");
};

start();
