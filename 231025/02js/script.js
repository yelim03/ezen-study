// const now = new Date();
// const birthDay = new Date(`1999-03-16`);
// const btn = document.querySelector("#btn");
// ;

// const toNow = now.getTime();
// const tobirth = birthDay.getTime();
// const passedTime = toNow - tobirth;

// const passedDay = Math.ceil(passedTime / (24 * 60 * 60 * 1000));

// btn.addEventListener("click", (e) => {
//   e.preventDefault();

//   let result = birthDay
//   let current = document.querySelector("current");
//   let dqys = document.querySelector("#days");
//   let hours = document.querySelector("#hours");
// });

const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const btn = document.querySelector("#btn");

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");
const resultYears = document.querySelector("#years");

const today = new Date();
current.innerText = `${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재`;

btn.addEventListener("click", (e) => {
  const birthDay = new Date(
    birthYear.value,
    birthMonth.value - 1,
    birthYear.value,
    );

    let passed = today.getTime() - birthDay.getTime();
    let passedYear = Math.floor(passed / (1000 * 60 * 60 * 24 * 30 *12));

    resultYears.innerText = `내가 태어난지 ${passedYear}이 지났습니다.`;
});



