// let n = parseInt(prompt("숫자를 입력해 주세요"));

// if (n !== 0 && n >= 1) {
//   for(let i = 0; i <= n; i++) {
//     if (i / n === 0) {
//       document.write(".");
//     } else {
//       document.write("소수가 아닙니다.");
//     }
//   }
// }

const number = parseInt(prompt("자연수를 입력하세요!"));
let isPrime;

if (number === 1) {
  document.write(`${number}은 소수도, 합성수도 아닙니다.`);
} else if (number === 2) {
  isPrime = true;
} else {
  for (let i = 2; i < number; i++) {
    if(number % i === 0) {
      isPrime = false;
      break;
    }
    else {
      isPrime = true;
    }
  }

  if (isPrime) {
    document.write(`${number}는 소수입니다.`);
  } else {
    document.write(`${number}는 소수가 아닙니다.`);
  }
}