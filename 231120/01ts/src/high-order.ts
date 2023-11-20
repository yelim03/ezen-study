//우리가 그동아 사용했던 보통 함수
const add1 = (a: number, b: number) => a + b;

//고차함수
const add2 =
  (a: number): ((arg0: number) => number) =>
  (b: number): number =>
    a + b;

const result = add2(1)(2);
console.log(result);
