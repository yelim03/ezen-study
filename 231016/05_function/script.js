/*
자바 스크립트 = 1급시민

1. 변수에 값을 할당할 수 있음
2. 다른 함수의 매개변수 혹은 인자값으로 사용
3. 다른 함수에서 반환값으로 반환
*/

let sum = (a, b) => a + b;
console.log(sum(2, 10));

function hello() {
  return "안녕하세요!";
}
function bye() {
  return '안녕히가세요!';
}

function userCheck(name, fn) {
  console.log(`${name}님`, fn());
}

userCheck("홍길동", hello);
userCheck("도레미", bye);

let init = () => {
  return function(a, b) {
    return a - b > 0 ? a - b : b - a;
  };
};

console.log(`init(30, 20) : ${init()}`);

