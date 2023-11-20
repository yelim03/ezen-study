// 예외 조항 처리!

// console.log("start");
// add();
// console.log("ing...");
// console.log("end");

try {
  //실행할 코드
  console.log("start");
  add();
  console.log("ing...");
} catch (err) {
  //예외사항이 발생했을 경우 실행할 코드
  console.log(`오류발생 : ${err}`);
} finally {
  // try문 이후에 실행할 코드 = 예외와 상관없이 무조건 실행
  console.log("end");
}

let json = '{"grade": 3, "age": 25}';
console.log(json);

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw "사용자 이름이 없습니다";
  }
} catch (err) {
  console.log(err);
} finally {
  console.log("종료");
}
