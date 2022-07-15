//DOM
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const clear = document.querySelector(".clearbtn");

//create grid
function createGrid(userInput = 16) {
  //grid dimensions
  container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
  //generates squares in grid
  for (i = 0; i < userInput * userInput; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    container.appendChild(squareDiv);
  }
}
//initial grid
createGrid();

//click and drag to draw
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

//button to change grid dimensions
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

//clear button
clear.addEventListener("click", () => {
  container.textContent = "";
  createGrid();
});
