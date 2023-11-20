//객체 구정요소
// key (키) & value(값) => property(*프로퍼티)

//객체 선언 방법1
// let book1 = {
//   title: "자바스크립트",
//   pages: 648,
// };

// console.log(book1);

//객체 선언방법2
// let book3 = new Object();

// book3.page = 550;
// book3.title = "자바스크립";
// console.log(book3);

// let student = {
//   name: "Park",
//   score: {
//     history: 85,
//     science: 94,
//     avg: function () {
//       return (this.history + this.science) / 2;
//     },
//   },
// };

// let book3 = {
//   title:"노드JS",
//   pages: 360,
//   done: true,
//   buy: function() { // buy라는 키값에 함수가 value값으로 들어갔고 buy() 메소드라고 함.
//     console.log("이 책을 구입했습니다.");
//   },
//   finish: function() {
//     book3.done === false ? console.log("읽는중") : console.log("완독");
//   },
// };

let bag1 = {
  color: "blue",
  width: 30,
  height: 50,
};