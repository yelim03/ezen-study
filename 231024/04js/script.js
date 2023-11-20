const elements = document.querySelectorAll("*");
// console.log(elements);

for (let element of elements ) { //elements에서 element하나씩 꺼내서 반복해서 이벤트를 주겠다.
  element.addEventListener("click", (e) => {
    console.log(
      `event.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}`
      );
  });
};

//이벤트 버블링(*가장 아래 위치한 요소부터 가장 최상단 위치한 요소까지 이벤드가 전파되는 형태)