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
  //button with event listener has id attribute which is used to access the corresponding column array and element
  const index = this.getAttribute("data-id");

  const columnArr = columnArrs[index];
  const column = columns[index];

  //if there are still empty spaces in the column...
  if (columnArr[5] === null) {
    //replace the first instance of null with a string of the current player's color
    const indexToReplace = columnArr.indexOf(null);
    columnArr[indexToReplace] = redTurn ? "red" : "yellow";
    //swap whose turn it is
    redTurn = !redTurn;
    heading.innerText = redTurn ? "Red's Turn" : "Yellow's Turn";
    //render changes to the page
    renderColumn(columnArr, column);
  }
}

function renderColumn(columnArr, columnEl) {
  let html = "";
  for (let i = 5; i >= 0; i--) {
    //if the current index is truthy then set the contents as the color variable or if not set the variable to the page's background color
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
