// 배열 메서드
// 변칙성 메서드 : map() / filter() / *resuce()

//reduce() : 누산기
//누산기 = 누적된 값을 계산 할 수 있는 메서드

let numbers = [1,2,3,4,5];
let result = numbers.reduce((total, current) => total + current, 0); //total: 첫번째 수 , current : 각각의 숫자
// 0 + 1 + 2 + 3 + 4 + 5

console.log(result);

