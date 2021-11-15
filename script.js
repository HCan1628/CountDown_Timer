const startMinus = 10;
let time = startMinus * 60;

const countdownEl1 = document.querySelector(".countdown");
const countdownEl2 = document.querySelector(".countdown2");

setInterval(updateCountDown, 1000);

function updateCountDown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl1.innerHTML = `${minutes}:${seconds}`;
  countdownEl2.innerHTML = `${minutes}:${seconds}`;
  time--;
}
