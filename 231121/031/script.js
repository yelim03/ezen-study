//0.상단 input태그에 대한 정의가 우선되어야한다.
//1.버튼태그에 대한 정의가 우선되어야 한다.
//2. 버튼태그에 저장된 속성값을 알아야한다.
//3.상단 input태그 안에 입력된 값을 찾아야 한다.
//4.input 태그에 입력된 값과 매칭되는 값을 버튼 태그의 속성 값을 통해서 찾는다.
const searchWordText = document.querySelector("#search-word-input");
const prefectureList = document.querySelectorAll("#prefecture-list button");

searchWordText.addEventListener("keyup", () => {
  const searchWord = searchWordText.value;
  prefectureList.forEach((element) => {
    if (!searchWord || searchWord === "") {
      element.classList.remove("hide");
      return;
    }

    const prefectureName = element.dataset.name;
    const phonetic = element.dataset.phonetic;
    if (
      searchWord.charAt(0) === prefectureName.charAt(0) ||
      searchWord.charAt(0) === phonetic.charAt(0)
    ) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  });
});
