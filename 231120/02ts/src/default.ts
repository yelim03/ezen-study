//지난시간에 배웠던 type별칭형태

// type stringNumberFunc = (arg0: string, arg1: number) => void;
// const f: stringNumberFunc = function (a: string, b: number): void {};
// const g: stringNumberFunc = function (c: string, d: number): void {};

//객체의 타입 정의: interface => 객체 타입정의 전문
// interface INameable {
//   name: string;
//   age: number;
// }
// const jack: INameable = {
//   name: "jack",
//   age: 20,
// };

//객체의 타입 정의 : interface가 아닌 type별칭으로도 타입 정의 가능

type Person = {
  name: string;
  age: number;
};
//JS에서 함수의 매개변수 값이 기본값 설정
//JS에서 구조분해할당 => 할당하고자 하는 값과, 값을 받는 키가 동일한 네이밍을 가지고 있는 경우, 축약해서 1번만 사용할수 있다.
const makePerson = (name: string, age: number = 10): Person => {
  const person = {
    name: name,
    age: age,
  };
  return person;
};

console.log(makePerson("jack", 20));
