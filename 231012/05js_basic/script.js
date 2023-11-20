const buttons = document.querySelectorAll("button"); // 문서에서 버튼들 담기
//querySelectorAll : 다수의 클래스를 가져올때 
const computerChoice = document.querySelector(".computer-choice"); // 컴퓨터의 선택 담기
const userChoice = document.querySelector(".you-choice"); // 사용자의 선택 담기
const winner = document.querySelector(".result"); // 가위바위보 결과값 담기
const result = ["가위", "바위", "보"]; // 결과 배열

const show = function (user, computer, result) { // 
  userChoice.innerHTML = user;
  computerChoice.innerHTML = computer;
  winner.innerHTML = result;
};

const game = function (user, computer) {
  if (user === computer) {
    message = "무승부";
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자 승리!";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        message = "컴퓨터 승리!";
        break;
    }
  }
  show(user, computer, message);
};

const play = function (event) {
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * 4);
  const computer = result[randomIndex];
  game(user, computer);
};

buttons.forEach(function (button) {
  button.addEventListener("click", play);
});