const countElement = document.getElementById("number");
const undoButton = document.getElementById("undo");
const redoButton = document.getElementById("redo");
const modifierButtons = document.querySelectorAll(".button--modifier");
const historyElement = document.getElementById("history");

let count = 0;
const history = [{ difference: 0, oldCount: 0, newCount: 0 }];
let index = 1;

function changeCount(value) {
  const oldCount = count;
  const valueNum = +value; //converts the string from the button's data-value attribute into a number so it can be used to modify the count
  count = count + valueNum;
  updateHistory(oldCount, valueNum);
  countElement.innerText = count;
}

function updateHistory(oldCount, difference) {
  if (history.length >= 50) {
    history.shift(); //history should be a maximum of 50 records
  }

  history.push({
    oldCount: oldCount,
    newCount: count,
    difference: difference,
  });

  displayHistory();
}

function displayHistory() {
  historyElement.innerHTML = "";
  history
    .slice(0, history.length - index + 1) //displays the history array up to the current state based on undos/redos
    .reverse()
    .forEach((record) => {
      const { difference, oldCount, newCount } = record;
      const liElement = document.createElement("li");
      liElement.innerText = `${
        difference > 0 ? "+" + difference : difference
      } (${oldCount} ⇨ ${newCount})`;
      historyElement.appendChild(liElement);
    });
}

function undo() {
  if (history.length) {
    //if any modifications have taken place
    if (index < history.length) {
      //use the index variable to move along the 'timeline' of the history array
      index++;
      count = history[history.length - index].newCount;
      countElement.innerText = count;
    } else {
      index = history.length;
    }

    //disable the undo button if impossible to undo further
    if (index === history.length) {
      undoButton.disabled = true;
    } else {
      undoButton.disabled = false;
    }
  }

  displayHistory();
  redoButton.disabled = false;
}

function redo() {
  if (history.length) {
    index--;
    if (index >= 1) {
      count = history[history.length - index].newCount;
      countElement.innerText = count;
    } else {
      index = 1;
    }
  }

  if (index === 1) {
    redoButton.disabled = true;
  } else {
    redoButton.disabled = false;
  }
  displayHistory();
}

modifierButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    changeCount(e.target.dataset.value);
    undoButton.disabled = false;
  });
});

undoButton.addEventListener("click", undo);

redoButton.addEventListener("click", redo);
