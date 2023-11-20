let num1 = parseInt(prompt("첫번째 숫자를 입력하세요!"));
let num2 = parseInt(prompt("두번째 숫자를 입력하세요!"));
let num3 = parseInt(prompt("세번째 숫자를 입력하세요"));


function  small(a, b, c) {
  let numbers = [];
  numbers.push(a, b, c);

  let result = Math.min(...numbers);
  return result;
}
document.write(small(num1, num2, num3));


let a = parseInt(prompt('첫 번째 숫자'));
let b = parseInt(prompt('두 번째 숫자'));
let c = parseInt(prompt('세 번째 숫자'));

let numTotal = (a, b, c) => {
  let result;
  if( a < b) {
    result = a;
  } else {
    result = b;
  }
  if (c < result) {
    result = c;
  }
  return result;
}
console.log(numTotal(a, b, c));




