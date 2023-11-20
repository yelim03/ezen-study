//Call back 예시
//왜 callback 함수를 써야하는가? => single thread 1차선 도로 한번에 하나의 
function showData(name, age) {
  alert(`안녕하세요! ${name}님. 나이가 ${age}살 이군요!`)
}
function getData(callback) {
  let userName = prompt("이름을 입력하세요");
  let userAge = parseInt(prompt("나이를 입력하세요"));
  callback(userName, userAge);
}

getData(showData);

