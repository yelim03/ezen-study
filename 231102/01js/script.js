function* train() {
  yield "판교역";
  yield "이매역";
  yield "삼동역";
  yield "경기광주역";
  yield "초월역";
  yield "곤지암역";
  yield "신둔도예촌역";
  yield "이천역";
  yield "세종대왕릉역";
  yield "여주역";
}

let gyeonggang = train();

const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let current = gyeonggang.next();
  if (current.done !== true) {
    result.innerText = current.value;
  } else {
    result.innerText = `종점입니다`;
    button.setAttribute("disabled", "disabled");
  }
});
