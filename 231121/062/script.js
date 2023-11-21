const userDataList = [
  { id: 1, name: "곰", age: 18 },
  { id: 2, name: "여우", age: 27 },
  { id: 3, name: "사자", age: 32 },
  { id: 4, name: "얼룩말", age: 41 },
  { id: 5, name: "기린", age: 56 },
];

const userList = document.querySelector(".user_list");

const updateList = (filteredList) => {
  let listHtml = "";
  for (let data of filteredList) {
    listHtml += `
    <li>${data.name} : ${data.age}세</li>
    `;
  }
  userList.innerHTML = listHtml;
};

const onClickButton = (e) => {
  const button = e.target;
  const targetAge = button.dataset.age;
  const filteredList = userDataList.filter((data) => data.age >= targetAge);
  //fillter : 중괄호 있으면 안됨
  updateList(filteredList);
};

const button = document.querySelectorAll(".button");
//클릭된 버튼 찾기
button.forEach((element) => {
  element.addEventListener("click", (e) => {
    onClickButton(e);
  });
});
