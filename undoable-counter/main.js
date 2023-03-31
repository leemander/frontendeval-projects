const countElement = document.getElementById("number");
const undoButton = document.getElementById("undo");
const redoButton = document.getElementById("redo");
const modifierButtons = document.querySelectorAll(".button--modifier");
const historyElement = document.getElementById("history");

let count = 0;
const history = [0];
let index = 1;

function changeCount(value) {
  const valueNum = +value;
  count = count + valueNum;
  updateHistory();
  console.table(history);
  countElement.innerText = count;
}

function updateHistory() {
  historyElement.innerHTML = "";
  history.push(count);
  history.forEach((record) => {
    const liElement = document.createElement("li");
    liElement.innerText = record;
    historyElement.appendChild(liElement);
  });
}

function undo() {
  if (history.length) {
    if (index < history.length) {
      index++;
      count = history[history.length - index];
      countElement.innerText = count;
    } else {
      index = history.length;
    }
  }
  console.log(index);
}

function redo() {
  if (history.length) {
    index--;
    if (index >= 1) {
      count = history[history.length - index];
      countElement.innerText = count;
    } else {
      index = 1;
    }
  }
  console.log(index);
}

modifierButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    changeCount(e.target.dataset.value);
  });
});

undoButton.addEventListener("click", undo);

redoButton.addEventListener("click", redo);
