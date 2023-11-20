// let btn = document.querySelector("button");
// let result = document.querySelector("#result");

// btn.addEventListener("click", (e) => {
//   e.preventDefault;

//   let ran = [...num];
//   for(i = 0; i <= 6; i++) {
//     let picked = Math.random(ran);
//   }
// });

//Lotto 성립조건
// 1. 정수 1부터 45까지의 숫자만 허용
// 2. 허용된 숫자 중 중복되지 않는 총 6개의 숫자만 추첨
// 3. 언제 추첨될 숫자가 생성되어야 하는가? => 버튼을 클릭
// 4. 생성된 숫자는 어디에 출력되어야 하는가? =? result 노드 안에 출력

// const button = document.querySelector("button");
// const result = document.querySelector("#result");
// const luckyNumber = {
//   digitCount: 6,
//   maxNumber: 45,
// }; // 구조분해할당  

// // const digitCount = 6;
// // const maxNumber = 45;

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   let {digitCount, maxNumber} = luckyNumber;
//   let myNumber = new Set();
//   for(let i = 0; i < digitCount; i++) {
//     myNumber.add(Math.floor(Math.random() * maxNumber +1 )) // 1부터 곱하기 => 0이 나올수 있으니까 1더하기
//   }
//   if (myNumber.size === 6) {
//     result.innerText = `${[...myNumber]}`; // 배열이니가 전개연산자로 쓰기
//   } else {
//     result.innerText = `중복숫자 발생! 재추첨 하겠습니다.`;
//   }
// });

const person = {
  name: "John",
  age: 30,
  job: "Engineer"
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}

