const userDataList = [
  { id: 123, name: 아이유 },
  { id: 456, name: 태연 },
  { id: 789, name: 조인성 },
];

const searchIdInput = document.querySelector("#search-id-input");
const searchResult = document.querySelector("#search-result");

// searchIdinput.addEventListener("keyup", () => {
//   const searchWord = searchIdinput.value;
//   prefectureList.forEach((element) => {
//     if (!searchWord || searchWord === "") {
//       element.style.display = "none";
//       return;
//     }

//     const prefectureID = userDataList.id;
//     const phonetic = userDataList.name;
//     if (
//       searchWord.charAt(0) === prefectureID.charAt(0) ||
//       searchWord.charAt(0) === phonetic.charAt(0)
//     ) {
//       searchResult.innerHTML = `${phonetic}`;
//     }
//   });
// });

const findUser = (searchId) => {
  const targetData = userDataList.find((data) => data.id === searchId);
  if (targetData === null) {
    searchResult.innerText = "유저 검색 결과 없음";
    return;
  }
  searchResult.innerText = targetData.name;
};

searchIdInput.addEventListener("keyup", (e) => {
  const searchId = Number(e.target.value);
  findUser(searchId);
});
