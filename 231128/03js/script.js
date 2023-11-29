// const cursor = document.querySelector(".cursorItem");
// const bottom = document.querySelector(".bottom");
//마우스좌표
// let x = 0;
// let y = 0;
// //동그라미좌표
// let targetX = 0;
// let targetY = 0;
// //속도
// const speed = 0.09;

// window.addEventListener("mousemove", (e) => {
//   x = e.pageX;
//   y = e.pageY;

//   const loop = () => {
//     targetX += (x - targetX) * speed;
//     targetY += (y - targetY) * speed;
//     cursor.style.top = targetY - 30 + "px";
//     cursor.style.left = targetX - 30 + "px";
//     window.requestAnimationFrame(loop);
//   };
//   loop();
// });

// bottom.addEventListener("mouseover", () => {
//   cursor.style.transform = "scale(0.2)";
// });
// bottom.addEventListener("mouseout", () => {
//   cursor.style.transform = "scale(1)";
// });

let x = 0;
let y = 0;
//동그라미좌표
let targetX = 0;
let targetY = 0;
//속도
const speed = 0.09;

const cursorItem = document.querySelector(".cursorItem");
const circle = cursorItem.querySelector(".circle");
const buttonAll = document.querySelectorAll("a");

buttonAll.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(0.3)";
  });
  item.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1)";
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;

  const loop = () => {
    targetX += (x - targetX) * speed;
    targetY += (y - targetY) * speed;
    cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;
    window.requestAnimationFrame(loop);
  };
  loop();
});
