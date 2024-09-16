const card = document.querySelector(".card")

function calculateAngle(x1, y1, x2, y2) {
  const dy = y2 - y1;
  const dx = x2 - x1;
  const rad = Math.atan2(dy, dx); // Radians
  const deg = rad * (180 / Math.PI); // Degrees
  return deg;
}

window.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect()
  const angle = calculateAngle(rect.x, rect.y, e.offsetX, e.offsetY)
  card.style.setProperty("--angle", angle + "deg");
})

