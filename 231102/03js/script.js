// class 생성사 함수를 활용하여 프로토타입 객체생성
// 해당 프로토타입 객체 활용 -> 인스턴스 객체 생성

class Lecture {
  constructor(hasTutor, lectId, members) {
    this.hasTutor = hasTutor;
    this.lectId = lectId;
    this.members = members;
  }
}

let class1 = new Lecture(false, "L001", ["Ahn", "Han", "Park"]);
let class2 = new Lecture(false, "L002", ["Lee", "Choi", "Kim"]);

let getStudents = (classRoom) => {
  let { hasTutor, lectId, members } = classRoom;
  let tutor;
  let Students;
  hasTutor ? ([tutor, ...Students] = members) : ([...Students] = members);
  return Students;
};
