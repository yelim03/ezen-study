/*fuction 함수명( 매개변수 (*선택적) => 인수 혹은 인자값) {
  함수 실행문 
}
*/
/* 
변수명, 함수명 => 카멜표기법, 스네이크표기법
calcsum()
*/
// *매개변수가 존재하지 않는 함수
// function calcSum() {
//   let sum = 0;
//   for(let i = 1; i <=10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}입니다.`);
// };

// calcSum();

//*함수 선언 => 함수 호출 => 함수 실행


//*매개변수가 존재하는 함수
// function sum(a, b) {
//   let result = a + b;
//   alert(`두 수의 합 : ${result}`);
// }
// sum(10, 40);

// function calcSum(a) {
//   let sum = 0;
//   for(let i = 1; i <= a; i++) {
//     sum += i;
//   }
//   console.log(`결과는 ${sum}`);
// }
// calcSum(10);

// let num = parseInt(prompt("몇 까지 더할까요?"));

// function calcSum(n) {
//   let sum = 0;
//   for(let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum; // 함수를 변수에 담기
// }
// let result = calcSum(num);

// document.write(`1부터 ${num}까지 더하면 ${result}`);

// let num1 = parseInt(prompt("첫번째 숫자를 입력해주세요"));
// let num2 = parseInt(prompt("두번째 숫자를 입력해주세요"));

// function multiple(a, b) {
//   return a * b;
// }
// let result = multiple(num1, num2);

// console.log(`두 수를 곱한 결과는 ${result} 입니다.`);

// function multiple(a, b, c = 10) {
//   return a * b + c;
// }

// console.log(multiple(2, 4, 8));
// console.log(multiple(2, 4));

let num = parseInt(prompt("숫자를 입력하세요"));

function calcSum(a) {
  let sum = 0;
  for(let i = 1; i <= a; i++) {
    sum += i;
  } 
  return sum;
}
let sum = calcSum(a);


document.write(`1부터 ${num}까지 더한수는 ${sum}입니다.`)



