const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const button = document.querySelector("button");
const origin = {
  x: 200,
  y: 200,
};
const alpha = 0.7;

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

ctx.fillStyle = "#ccc";
ctx.fillRect(200, 200, 100, 100);

button.addEventListener("click", () => {
  ctx.globalAlpha = alpha;
  ctx.translate(origin.x, origin.y);
  ctx.rotate((Math.PI / 180) * 30);
  ctx.fillStyle = randomColor();
  ctx.fillRect(0, 0, 100, 100);
  ctx.translate(-origin.x, -origin.y);
});
