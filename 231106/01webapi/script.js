/*
Strage API 객체는 다음과 같은 프로퍼티(*속성) & 메서드(*함수)를 사용할 수 있습니다.

length 프로퍼티 : 배열안에 담겨있는 아이템 개수 확인
setItem() : 스토리지에 자료를 저장할 때 사용할 수 있는 메서드
getItem() : 스토리지에 저장되어있는 자료를 가져올 때 사용할 수 있는 메서드
key() : 스토리지에 있는 키를 반환해주는 메서드

기본적으로 스토리지에는 key:value 값이 한쌍으로 보관됩니다.
removeItem(key) : 키 이름을 매개변수 값을 지정할 경우, 해당 키를 삭제!!
clear() : 현재 스토리지에 저장되어있는 모든 키/값을 모두 삭제!!
*/

let students = ["Kim", "Lee", "Park"];
// console.log(`현재 students : ${students}`);
localStorage.setItem("students", JSON.stringify(students));

let localData;
if(localStorage.getItem("students") === null) {
  localData = [];
} else {
  localData = JSON.parse(localStorage.getItem("students")); // parse : JSON 파일을 객체로 변형
}
localData.push("Choi");
console.log(`추가 후 students : ${localData}`);

localStorage.setItem("students", JSON.stringify(localData));

const indexOfValue = localData.indexOf("Lee");
localData.splice(indexOfValue, 1);
console.log(`삭제 후 students : ${localData}`);
localStorage.setItem("students", JSON.stringify(localData));

localStorage.removeItem("students");



