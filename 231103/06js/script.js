fetch("student.json") // respons : 임의의로 쓴거임
.then(response => response.json()).then((json) => {
  let output = "";
  json.forEach(student => {
    output += `
    <h2>${student.name}</h2>
    <ul>
      <li>전공: ${student.major}</li>
      <li>학년: ${student.grade}</li>
    </ul>
    <hr/>
    `;
  });
  document.querySelector("#result").innerHTML = output;
})
.catch((err) => console.log(err));
