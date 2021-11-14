const startMinus = 10;
let time = startMinus * 60;

const countdownEl = document.querySelector("#countdown");

setInterval(updateCountDown, 1000);

function updateCountDown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
}
