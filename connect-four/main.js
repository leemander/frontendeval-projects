const heading = document.getElementById("heading");
const buttons = document.querySelectorAll(".game__button");
const columns = document.querySelectorAll(".game__column");

let redTurn = true;
const columnArrs = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

function placeToken() {
  const index = this.getAttribute("data-id");

  const columnArr = columnArrs[index];
  const column = columns[index];

  if (columnArr[5] === null) {
    const indexToReplace = columnArr.indexOf(null);
    columnArr[indexToReplace] = redTurn ? "red" : "yellow";
    redTurn = !redTurn;
    heading.innerText = redTurn ? "Red's Turn" : "Yellow's Turn";
    renderColumn(columnArr, column);
  }
}

function renderColumn(columnArr, columnEl) {
  let html = "";
  for (let i = 5; i >= 0; i--) {
    const color = columnArr[i] ? columnArr[i] : "#fafafa";
    html += `
        <div class="game__space">
            <div class="game__token" style="background-color: ${color}"></div>
        </div>
      `;
  }

  columnEl.innerHTML = html;
}

/*function checkForDraw() {
  return (
    columnArrs.map((column) => column.length).reduce((a, b) => a + b) === 42
  );
}*/

buttons.forEach((button) => {
  button.addEventListener("click", placeToken);
});
