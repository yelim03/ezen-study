// let tra = parseInt(prompt("교통비 사용금액을 입력해주세요", "ex. 3000"));
// let food = parseInt(("식비 사용금액을 입력해주세요", "ex. 3000"));
// let drink = parseInt(prompt("음료비 사용금액을 입력해주세요", "ex. 3000"));

// let sum = tra + food + drink;

// let gap = 10000 - sum;
// let result = gap < 0 && gap > 0;
// result = result ? "돈을 조금 아껴 써주세요" : "돈 관리 잘하셨어요!!";

// document.write(`${gap}, ${result}`);

let traffic = parseInt(prompt("교통비를 알려주세요!"));
let eat = parseInt(prompt("식비를 알려주세요!"));
let drink = parseInt(prompt("음료비를 알려주세요!"));

let normal = traffic + eat + drink;
let result = normal < 10000;
let result1 = 10000 - normal;
let result2 = normal - 10000;
result = result ? `${result1}원 남았어요! 돈관리 잘하셨어요!` : `${result2}원 초과했어요! 조금만 더 노력해 주세요!`;

document.write(result);

