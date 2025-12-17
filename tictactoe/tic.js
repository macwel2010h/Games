let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let menuBtn = document.querySelector("#menu-btn");
let bottomMenuBtn = document.querySelector("#bottom-menu-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;
let moveCount = 0;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turno = true;
  moveCount = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked.");
    if (turno) {
      box.innerText = "O";
      box.classList.add("player-o");
      turno = false;
    } else {
      box.innerText = "X";
      box.classList.add("player-x");
      turno = true;
    }
    box.disabled = true;
    moveCount++;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("player-o", "player-x");
  }
};
const showWinner = (winner) => {
  msg.innerText = `🎉 Player ${winner} Wins! 🎉`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const showDraw = () => {
  msg.innerText = "It's a Draw! Play Again?";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
        return;
      }
    }
  }

  if (moveCount === 9) {
    showDraw();
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
menuBtn.addEventListener("click", () => {
  window.location.href = "../index.html";
});
bottomMenuBtn.addEventListener("click", () => {
  window.location.href = "../index.html";
});
