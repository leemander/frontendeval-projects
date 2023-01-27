const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startButton = document.getElementById("start");

const interactiveElements = [
  hoursInput,
  minutesInput,
  secondsInput,
  startButton,
];

let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  hours = +hoursInput.value;
  minutes = +minutesInput.value;
  seconds = +secondsInput.value;

  interactiveElements.forEach((element) =>
    element.setAttribute("disabled", "true")
  );

  renderTime();

  setTimeout(() => {
    isRunning = true;
  }, 1000);
}

function updateTime() {
  if (seconds === 0 && minutes) {
    minutes = minutes - 1;
    seconds = 60;
  }

  if (minutes === 0 && hours) {
    hours = hours - 1;
    minutes = 59;
    seconds = 60;
  }

  seconds = seconds - 1;

  if (seconds === 0 && minutes === 0) {
    alert("Time's up!");
    isRunning = false;
    interactiveElements.forEach((element) => {
      element.removeAttribute("disabled");
      element.value = "";
    });
  } else {
    renderTime();
  }
}

function renderTime() {
  hoursInput.value = formatTime(hours);
  minutesInput.value = formatTime(minutes);
  secondsInput.value = formatTime(seconds);
}

function formatTime(number) {
  return (number = number < 10 ? "0" + number : number);
}

setInterval(() => {
  if (isRunning) updateTime();
}, 1000);

startButton.addEventListener("click", startTimer);
