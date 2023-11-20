// let displayHello = ()=> {
//   console.log("Hello");
// };

// displayHello();

// //JS에서 비동기 처리방식 마지막 3번째 방법 : async 함수!!

// async function displayHello01() {
//   console.log("Hello");
// }
// displayHello01();

async function whatsYourFavorite() {
  let fav = "Javascript";
  return fav;
}
async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

async function init() {
  const response = await whatsYourFavorite(); //await : 순서를 정해줌.
  const result = await displaySubject(response);
  console.log(result);
}
init();