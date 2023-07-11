function createBoxes(numberPerRow) {
    const cdiv = document.querySelector('#grid-container');
    const total = (numberPerRow * numberPerRow) + numberPerRow;
    const mod = numberPerRow + 1;
  
    for (let i = 1; i < total; i++) {
      const div = document.createElement('div');
      div.classList.add("square")
  
      if (i % mod === 0) {
        div.style.cssText = "border: 0; height: 0; width: 100%";
      } else {
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
      }
  
      cdiv.appendChild(div);
    }
  }
  
  createBoxes(16);

const squares = document.querySelectorAll(".square");
squares.addEventListener("mouseover", () => {
    console.log("yeehaw")
});

