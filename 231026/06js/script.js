const email = document.querySelector("#email");
const btn = document.querySelector("input");
const result = document.querySelector("#result");

btn.addEventListener("click", (e) => {
  e.preventDefault();
    
  for(let i = 0; i < email.length; i ++) {
    if(email[i] === "@") {

    }
  }
  return ;
});

// const email = document.querySelector("#email");
// const button = document.querySelector("#btn");
// const result = document.querySelector("result");

// button.addEventListener("click", (e) => {
//   e.preventDefault();

//   if(email.value !== "") {
//     let userName = email.value.split("@")[0];
//     userName = userName.substring(0, 3);
//     let domain = email.value.split("@")[1];
//     result.innerText = `${userName}***@${domain}`;
//   };
// });

// button.addEventListener("click", (e) => {
//   e.preventDefault();

//   if(email.value !== "") {
//     let userName = email.value.split("@")[0];
//     userName = userName.substring(0, userName.length - half);
//     let domain = email.value.split("@")[1];
//     result.innerText = `${userName}***@${domain}`;
//   };
// });