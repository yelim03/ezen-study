const imgBox = document.querySelector("#container > img");

imgBox.addEventListener("mouseover", () => {
  imgBox.src = "/img5/2/pic-6.jpg";
});
imgBox.addEventListener("mouseout", () => {
  imgBox.src = "/img5/2/pic-1.jpg";
});

