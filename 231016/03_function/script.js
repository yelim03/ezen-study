// let sum = {
//   name: "park",
// };

// let sum = function(a, b) {
//   return a + b; 
// };

// console.log(`함수 실행 결과: ${sum(10, 20)}`);

// //즉시 실행함수

// (function(a, b) {
//   let sum = a + b
//   console.log(`함수 실행 결과: ${sum}`);
// })(100, 200);

//화살표 함수
// let hi = () => `안녕하세요`;
// console.log(hi());

// let multiple = (a, b) => a * b;
// console.log(`두 수를 곱한 결과는 ${multiple(10, 20)}입니다.`);

//콜백함수 (*Call Back : cb)
// const btn = document.querySelector("button");
// function display() {
//   alert("클릭했습니다.");
// }

// btn.addEventListener("click", display);

// let num1 = parseInt(prompt("첫번째 숫자를 입력하세요"));
// let num2 = parseInt(prompt("두번째 숫자를 입력하세요"));

// let multiple = (a, b) => a * b;

// document.write(`두수를 곱한 값은 ${multiple(num1, num2)}`);

let lan = parseInt(prompt("국어점수를 입력해주세요"));
let eng = parseInt(prompt("수학점수를 입력해주세요"));

let avg = (a, b) => (a + b) / 2;

document.write(`국어 수학의 평균은 ${avg(lan, eng)}`);