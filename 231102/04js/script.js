// let student = {
//   name: "슛돌이",
//   major: "체육교육학과",
//   grade: 2,
// };

// let json = JSON.stringify(student);
// // console.log(json);

// let member = '{"name": "영심이", "age": 30, "hobby": "swimming"}';
// // console.log(member);

// let member_obj = JSON.parse(member);
// console.log(member_obj);

let xhr = new XMLHttpRequest();

let jsonTest01 = xhr.open("GET", "student.json", true);
console.log(jsonTest01);
let jsonTest02 = xhr.send();
console.log(jsonTest02);
console.log(xhr);

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log("succeess!");
    let students = JSON.parse(xhr.responseText);
    let result = document.querySelector("#result");
    result.innerText = `${students.name}학생은 ${students.grade}학년입니다.`;
  }
};

// console.log(students);
