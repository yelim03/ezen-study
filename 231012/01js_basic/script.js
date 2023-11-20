//JS 객체 : 자료를 저장하고 처리하는 기본단위 (변수보다 큰범위)

let shoeDog = {
  author: "phil knight",
  category: "social",
  pages: 500,
  price: 19800,
}; // {}객체 

//JS 객체를 생성하는 방법
//1) 함수형 생성방법 (*내장함수)
// let tv = new Object(); //내장함수 사용시 반드시 new를 사용
// tv.color = "white";
// tv.price = 300000;
// tv.info = function() {
//   document.write(`tv색상 : ${tv.color} <br/>`);
//   document.write(`tv가격 : ${tv.price} <br/>`);
// };
// document.write(`<h1>tv 객체 메서드 호출</h1>`);
// tv.info();

// 2) 속성설정 방법(보편적으로 사용)
// let car = {
//   color: "black",
//   price: 500000,
//   info: function() {
//     document.write(`car색상: ${car.color} <br/>`);
//     document.write(`car가격: ${car.price} <br/>`);
//   },
// };
// document.write(`<h1>tv 객체 메서드 호출</h1>`);
// car.info(); 

// this 객체 => 메서드 (*method) : 함수형태 종류 중 하나 

//객체&메서드 : 재활용이 가능한 객체 및 메서드
// let test = {
//   avg: function(math, science) { //math, science: 매개변수
//     return math + science;
//   },
// };
// document.write(test.avg(50, 100)); 

// //객체&메서드 : 재활용이 불가능한 객체 및 메서드
let test01 = {
  math: 50,
  science: 100,
  avg: function() { 
    return this.math + this.science; // this는 math와 science가 포함되어져있는 메서드를 가져옴
  },
};
document.write(test01.avg()); 



