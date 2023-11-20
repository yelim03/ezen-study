/* 
1) 현재 날짜 받아오기
2) 처음 만난날 받아오기
3) 현재 날짜를 밀리초로 환산
4) 처음만난날 밀리초로 환산
5) 현재날짜 + 처음만난날 계산식 
6) 밀리초로 계산된 기간 일수로 바꾸기

출력
*/

let now = new Date();
let firstDay = new Date(`2023-08-22`);

let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
let passedDay = Math.ceil(passedTime / (24 * 60 * 60 * 1000));

document.querySelector(".accent").innerHTML = passedDay + "일 째 되는날"

/*
1) 날짜 계산하는 함수
2) 처음만난 날을 밀리초로 계산한 값과 변수 day를 더한 값 담기
3) 담아온 밀리초로 된 년도를 년도로 바꾸기
4) 담아온 밀리초로 된 월수를 월로 바꾸기
5) 담아온 밀리초로 된 일수를 일로 바꾸기
6) 출력
*/

function calcDate(days) {
  let future = toFirst + days * (24*60*60*1000);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();
  document.querySelector("#date" + days).innerHTML = `${year}년 ${month}월 ${date}일`;
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
