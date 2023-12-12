const btn = document.querySelector("#btn");
const myRequestFullScreen = (element) => {
  if (element.myRequestFullScreen) {
    element.myRequestFullScreen();
  }
};
btn.addEventListener("click", () => {
  myRequestFullScreen();
});
