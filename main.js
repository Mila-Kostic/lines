let container = document.querySelector(".container");
let ballColors = [
  "red",
  "green",
  "blue",
  "yellow",
  "indianred",
  "skyblue",
  "gray",
];
makeGrid();

let boxes = document.querySelectorAll(".box");

makeBalls(10);

function makeBalls(ballNumber) {
  let rand = Math.floor(Math.random() * boxes.length);
  let rand2 = Math.floor(Math.random() * ballColors.length);
  let randColor = ballColors[rand2];
  let randBox = boxes[rand];
  randBox.innerHTML = `<div class="ball" style="background: ${randColor}"></div>`;
}
function makeGrid() {
  let text = ``;
  for (let i = 0; i < 100; i++) {
    text += `
        <div class="box"></div>
        `.trim();
  }
  container.innerHTML = text;
}

/**7 min */
