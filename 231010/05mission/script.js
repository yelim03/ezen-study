let today = new Date();
let currentYear = today.getFullYear();
let birthYear = prompt("태어난 년도는?");
let age = currentYear - birthYear + 1;

document.write(`당신의 나이는 ${age}세 입니다`);
