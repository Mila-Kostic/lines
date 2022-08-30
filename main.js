let container = document.querySelector(".container");

makeGrid();

function makeGrid() {
  let text = ``;
  for (let i = 0; i < 100; i++) {
    text += `
        <div class="box"></div>
        `.trim();
  }
  container.innerHTML = text;
}
