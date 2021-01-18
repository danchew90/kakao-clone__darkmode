const dayMonitor = document.querySelector(".day-monitor"),
  dayDisplay = dayMonitor.querySelector("span");

function show() {
  const aday = new Array("sun", "mon", "tue", "wed", "Thu", "Fri", "Sat");
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  dayDisplay.innerText =
    date.getFullYear() +
    "." +
    month +
    "." +
    date.getDate() +
    "(" +
    aday[date.getDay()] +
    ")";
}

function init() {
  show();
}

init();
