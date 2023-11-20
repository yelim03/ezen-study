//pet 이라는 클래스를 만든 후 하나의 인스턴스 객체 만들기
//pet 클래스는 name, color 프로퍼티를 갖고, run() 메서드를 갖고 있어야함
//run() 메서드는 반려동물의 name 속성값과 함께 "is running"이라는 문자를 일람창에 표시할 수 있도록 정의해 주세요!

class pet {
  constructor (name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    alert(`${this.name}is rummig`);
  }
}
const pet1 = new pet("푸들");
pet1.run();


class Cat extends pet {
  constructor (name, color, breed) {
    super(name, color);
    this.breed = breed;
  }
  viewInfo() {
    alert(`${this.name}은 ${this.color}색이고 ${this.breed}입니다.`);
  }
}

const Cat1 = new Cat("곰곰", "블루", "푸들");
Cat1.viewInfo();





// class pet {
//   constructor (name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   run() {
//     alert(`${this.name}is running`);
//   }
// }
// const pet1 = new pet("puppy","yellow");
// pet1.run();

// class Cat extends pet {
//   constructor(name, color, breed) {
//     super(name, color);
//     this.breed = breed;
//   }
//   viewInfo() {
//     alert(`${this.name}, ${this.color}, ${this.breed}`);
//   }

// }
// const Cat1 = new Cat("cat", "blue", "ss");
// Cat1.viewInfo();
