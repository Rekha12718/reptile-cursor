const snakeLength = 20;
const segments = [];

// create snake segments
for (let i = 0; i < snakeLength; i++) {
  const div = document.createElement("div");
  div.classList.add("segment");
  document.body.appendChild(div);
  segments.push({ el: div, x: 0, y: 0 });
}

let mouseX = 0;
let mouseY = 0;

// track mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  let x = mouseX;
  let y = mouseY;

  segments.forEach((seg, index) => {
    const dx = x - seg.x;
    const dy = y - seg.y;

    seg.x += dx * 0.3;
    seg.y += dy * 0.3;

    seg.el.style.left = seg.x + "px";
    seg.el.style.top = seg.y + "px";

    x = seg.x;
    y = seg.y;
  });

  requestAnimationFrame(animate);
}

animate();
