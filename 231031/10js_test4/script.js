let student = parseInt(prompt("학생 수를 입력하세요"));

const pencil = (student) => {
  let das = Math.ceil(student / 12);
  return das;
}
console.log(pencil(student));  