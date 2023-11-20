const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, (Math.PI / 180) * 180 * 2, false);
    ctx.fill();
  };
}

// const randomColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r},${g},${b})`;
// };

// const CircleOne = new Circle(100, 100, 50, randomColor());
// const CircleTwo = new Circle(200, 200, 20, randomColor());
// const CircleThree = new Circle(350, 30, 40, randomColor());
// const CircleFour = new Circle(500, 270, 80, randomColor());
// const CircleFive = new Circle(550, 80, 50, randomColor());
// CircleOne.draw();
// CircleTwo.draw();
// CircleThree.draw();
// CircleFour.draw();
// CircleFive.draw();

const objs = [];
for (let i = 0; i < 20; i++) {
  const radius = Math.floor(Math.random() * 50) + 10;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
  objs.push(new Circle(x, y, radius, color));
}

for (let i = 0; i < objs.length; i++) {
  objs[i].draw();
}
