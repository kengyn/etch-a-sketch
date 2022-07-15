const container = document.querySelector(".container");

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
  } else {
    return;
  }
});
container.addEventListener("mouseup", (e) => {
  if (clicked == true) {
    clicked = false;
  }
});
