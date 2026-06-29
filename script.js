let time = 300;
let interval;

function startTimer() {
  if (interval) return;

  interval = setInterval(() => {
    if (time <= 0) {
      clearInterval(interval);
      alert("انتهى الوقت!");
      return;
    }

    time--;

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("minutes").textContent =
      String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
      String(seconds).padStart(2, "0");
  }, 1000);
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  time = 300;

  document.getElementById("minutes").textContent = "05";
  document.getElementById("seconds").textContent = "00";
}
