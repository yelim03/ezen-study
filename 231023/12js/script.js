const buttons = document.querySelectorAll("p > span");

for (let button of buttons) {
  butto.addEventListener("click", function () {
    this.parentNode.remove(this);
  });
};
