const f = document.querySelector("#number1");
const s = document.querySelector("#number2");
const button = document.querySelector("button")
const result = document.querySelector("#result");

const getGCD = (f, s) => {
  let max = f > s ? f: s;
  let GCD =0;
  for(let i = 0; i <= max; i++) {
    if(f % i === 0 && s % i === 0) {
      GCD = i;
    }
  }
  return GCD;
}

button.onclick = () => {
  result.innerText = getGCD(f.value, s.value);
};


// function getGCD(n, m) {
//   let max = n > m ? n : m;
//   let GCD = 0;
//   for (let i = 1; i <= max; i ++) {
//     if(n % i === 0 && m % i ===0 ) {
//       GCD = i;
//     }
//   }
//   return GCD;
// }












