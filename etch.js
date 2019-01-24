let fillColor = "blue";
let gridHeight = 16;
let gridWidth = 16;
let cellSize = "30px";

function reset() {
  location.reload();
  console.log("should reset");
  //rows = document.querySelectorAll(".row")
  //rows.forEach()
  //makeGrid(16, 16);
}
function makeGrid(x, y) {
  const container = document.getElementById('gridContainer')
  //container.style.width = gridWidth * cellSize;
  //container.style.height = gridHeight * cellSize;
  for (let i = 0; i < x; i++) {
    //make  new row
    let row = document.createElement('div');
    row.classList.add("row");
    //row.style.width = container.style.width;
    container.appendChild(row);

    for(let j = 0; j < y; j++) {
      //add columns to row
      let cell = document.createElement('div');
      cell.classList.add('cell');
      row.appendChild(cell);



    }
  }
}
function paintCell(e) {
  this.style.backgroundColor = fillColor;
  console.log(this)
  console.log(e)
}
makeGrid(16, 16);
const cells = document.querySelectorAll(".cell")
cells.forEach(cell => cell.addEventListener('mouseover', paintCell))

