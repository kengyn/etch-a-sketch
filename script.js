const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

let squareDiv = document.createElement("div");
squareDiv.classList.add("square");
for (i = 0; i < 16; i++) {
  container.appendChild(squareDiv.cloneNode());
}

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

let gridSize = 0;
btn.addEventListener("click", () => {
  let answer = parseInt(prompt("how many squares per side?", ""));
  if (!Number.isInteger(answer)) {
    alert("not a number");
  } else {
    gridSize = answer;
  }
});
