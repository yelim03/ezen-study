// let num = document.querySelector("#user-number");
// let btn = document.querySelector("#btn");
// let result = document.querySelector("#result");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let num1 = num.value;
//   // console.log(num1);

//   if (num1 < 10) {
//     result.innerHTML = `입력된 숫자는${num1}`;
//     // console.log(result);
//   } else if (num1 > 10) {
//     alert("10보다 작은 수를 입력하세요");
//   } else {
//     alert("숫자를 입력하세요!");
//   };
// });

// const button = document.querySelector("form > input");
// const userNumber = document.querySelector("#user-number"); //서버로 값을 전달해야지만 밸류라는 값이 채워져서 상단에 넣어도 의미가 없음.!!!!!!!!!!!!!!!

// button.addEventListener("click", (e) => {
//   e.preventDefault();

//   let n = userNumber.value;
//   // console.log(n);
//   try {
//     if(n === "" || isNaN(n)){
//       throw `숫자를 입력하세요!`;
//     } //isNaN(n) : 숫자가 아니다. 
//     n = Number(n);
//     if (n <= 10) {
//       document.querySelector("#result").innerText = n;
//     }
//     if (n > 10) {
//       throw `10보다 작은 수를 입력하세요`;
//     }
//   } catch(err) {
//     alert(err);
//   } finally {
//     userNumber.value = "";
//   }
// });

let num = document.querySelector("#user-number");
let btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let n = num.value;
  console.log(n)
  try {
    if (n === "" || isNaN(n)) {
      throw `숫자를 입력하세요`;
    }
    n = Number(n);
    if (n <= 10) {
      document.querySelector("#result").innerText = n;
    }
    if (n > 10) {
      throw `10보다 작은 수를 입력하세요`;
    }
  } catch (err) {
    alert(err);
  } finally {
    num.value = "";
  }
});



