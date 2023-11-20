// window.onload = function () {
//   const bgCount = 5;
//   let randomNumber = Math.floor(Math.random() * bgCount) + 1;
//   document.body.style.backgroundImage = `url(/images2/bg-${randomNumber}.jpg)`
// };

const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  
  let img = document.createElement("img");
  img.setAttribute("src", "/images2/bg-1.jpg");
  img.setAttribute("style", "width:300px;margin-top:20px;");
  document.body.append(img);
});