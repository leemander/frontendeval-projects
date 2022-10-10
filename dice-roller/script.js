const form = document.querySelector("form");
const diceEl = document.querySelector(".dice");

function generateDice(numberOfDice) {
  diceEl.innerHTML = "";
  for (let i = 0; i < numberOfDice; i++) {
    const dieValue = Math.ceil(Math.random() * 6);
    const die = document.createElement("div");
    die.classList.add("die");
    die.dataset.value = dieValue;
    diceEl.append(die);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  generateDice(form.querySelector("input").value);
});
