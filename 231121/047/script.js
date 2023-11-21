// const container = document.querySelector(".container");

// container.innerHTML =
//   '<div class="inneritem"><h2>곰</h2><br><p>지역 : 서울</p></div> <div class="inneritem"><h2>여우</h2><br><p>지역 : 대전</p></div> <div class="inneritem"><h2>사자</h2><br><p>지역 : 부산</p></div>';

const userList = [
  { id: 1, name: "곰", address: "서울" },
  { id: 1, name: "여우", address: "대전" },
  { id: 1, name: "사자", address: "부산" },
];

const container = document.querySelector(".container");

userList.forEach((userData) => {
  container.innerHTML += `
  <div class="card">
  <h2>${userData.name}</h2>
  <p>지역 : ${userData.address}</p>
  </div>`;
});
