// 전역(Global)변수 & 지역(Local)변수 & 블록(Block)변수 

//*지역변수 = result
// function sum(a, b) {
//   let result = a + b;
// }
// console.log(result);

//전역
// let hi = "hello";

// function greeting() { //전역
//   console.log(hi); //지역
// }

// greeting(); 

/*
let hi = "hello";

function change() {
  hi = "bye"; //전역변수는 지역변수에서 사용가능하기 때문에 재할당
}

console.log(hi);
change();
console.log(hi);//순서중요!!
*/

const factor = 5;
const num = 10;

function calc() {
  return num * factor;
}

{
  // const num = 10;// num은 블록변수이기때문에 전역변수에서 사용할수 없음
  let result = calc();
  document.write(`result : ${result}`);
}