const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const clear = document.querySelector(".clearbtn");

let squareDiv = document.createElement("div");
squareDiv.classList.add("square");

function createGrid(userInput = 16) {
  container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
  for (i = 0; i < userInput * userInput; i++) {
    container.appendChild(squareDiv.cloneNode());
  }
}

createGrid();

let clicked = false;
container.addEventListener("mousedown", (e) => {
  clicked = true;
  e.target.style.backgroundColor = "black";
});
container.addEventListener("mousemove", (e) => {
  if (clicked == true) {
    e.target.style.backgroundColor = "black";
  }
});
container.addEventListener("mouseup", (e) => {
  if (clicked == true) {
    clicked = false;
  }
});

btn.addEventListener("click", () => {
  let gridSize = parseInt(prompt("how many squares per side?", ""));
  if (!Number.isInteger(gridSize)) {
    alert("not a number");
  } else if (gridSize > 100) {
    alert("too big");
  } else {
    container.textContent = "";
    createGrid(gridSize);
  }
});

clear.addEventListener("click", () => {
  container.textContent = "";
  createGrid();
});
