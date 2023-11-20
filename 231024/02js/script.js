const btn = document.querySelector("#btn");
// console.log(btn);
const nav = document.querySelector("#nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});