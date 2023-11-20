class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  buy() {
    console.log(`${this.title}을 ${this.price}원에 구매했습니다.`);
  }
}
const book1 = new BookC("타입스크립트", 10000);
book1.buy();

class TextbookC extends BookC { //extends : 확장하다.
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }

  buyTextbook () {
    console.log(`${this.major}전공서적, ${this.title}을 구매했습니다.`);
  }
}

const book2 = new TextbookC("html", 5000, "컴터공학");
book2.buyTextbook();
book2.buy();