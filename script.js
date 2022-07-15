const container = document.querySelector(".container");

for (i = 0; i < 16; i++) {
  let squareDiv = document.createElement("div");
  squareDiv.classList.add("square");
  container.appendChild(squareDiv);
}
