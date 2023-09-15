const p1Score = document.querySelector("#p1-score");
const p2Score = document.querySelector("#p2-score");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const resetButton = document.querySelector("#reset");
const winPoint = document.querySelector("#winPoint");
const confirm = document.querySelector("#confirm");

let newScore1 = 0;
let newScore2 = 0;
let winGame = 0;
let isGameOver = false;

p1Score.addEventListener("click", () => {
  if (!isGameOver) {
    newScore1 += 1;
    if (winGame === newScore1) {
      isGameOver = true;
      disable();
    }
    p1Display.textContent = newScore1;
  }
});

p2Score.addEventListener("click", () => {
  if (!isGameOver) {
    newScore2 += 1;
    if (winGame === newScore2) {
      isGameOver = true;
      disable();
    }
    p2Display.textContent = newScore2;
  }
});

function reset() {
  isGameOver = false;
  newScore1 = 0;
  newScore2 = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Score.disabled = false;
  p2Score.disabled = false;
}
// resetButton.addEventListener("click", reset);

confirm.addEventListener("click", function () {
  winGame = parseInt(winPoint.value);
  reset();
});

const disable = () => {
  p1Score.disabled = true;
  p2Score.disabled = true;
};
