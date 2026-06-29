let seconds = 0;
let timer = null;

function updateTimer() {
  seconds++;
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  document.getElementById("timer").textContent =
    String(hrs).padStart(2, "0") + ":" +
    String(mins).padStart(2, "0") + ":" +
    String(secs).padStart(2, "0");
}

document.getElementById("start").onclick = function () {
  if (timer === null) {
    timer = setInterval(updateTimer, 1000);
  }
};

document.getElementById("pause").onclick = function () {
  clearInterval(timer);
  timer = null;
};

document.getElementById("reset").onclick = function () {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  document.getElementById("timer").textContent = "00:00:00";
};
