function showPrice() {
  let originPrice = document.querySelector("#oPrice").value;
  console.log(originPrice);
  let rate = document.querySelector("#rate").value;
  console.log(rate);
  let savedPrice = originPrice * (rate / 100);
  console.log(savedPrice);
  let resultPrice = originPrice - savedPrice;
  console.log(resultPrice);
  document.querySelector(
    "#showResult"
  ).innerHTML = `상품의 원래 가격은 ${originPrice}이고, 할인률은${rate}입니다. ${savedPrice}원을 절약한 ${resultPrice}원에 구매할 수 있습니다.`;
}
