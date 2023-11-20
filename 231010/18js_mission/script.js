// const arr = [1,3,5,7,9,11,13,15,17,19];
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] > 10) { // 여기서 i 는 인덱스 값 , 인덱스는 0부터 시작 
//     document.write(`${arr[i]} <br/>`);
//   } 
// }


// for (let i = 1; i <= 100; i++) {
//   if(i % 5 == 0 && i % 7 != 0) {
//     document.write(`<p class='red'>${i}</p>`);
//   } else if(i % 7 == 0 && i % 5 != 0) {
//     document.write(`<p class='green'>${i}</p>`);
//   } else if(i % 7 == 0 && i % 5 == 0) {
//     document.write(`<p class='blue'>${i}</p>`);
//   }
// }

//중첩 for문
// for (let i = 1; i <=3; i++) { //행
//   for (let k = 1; k <=2; k++){ //열
//     document.write(`${i}행 ${k} <br/>`);
//   }
//   document.write("<br/>");
// }


// for (let i = 1; i <=5; i++) {
//   for (let k = 1; k<=9; k++) {
//     document.write(`${i} X ${k} = ${i * k} <br/>`);
//   }
// }

// for (let a = 1; a <= 5; a++) {
//   document.write(`<h1>${a}단</h2>`);
//   for (let b = 1; b <= 9; b++) {
//     document.write(`${i} X ${k} = ${i * k} <br/>`);
//   }
// }

let num = 1;
let t = `<table border=1>`;
for (let i = 1; i <=5; i++) {
  t += `<tr>`;
  for(let k = 1; k <=5; k++) {
    t += `<td>${num}</td>`
    num++; 
  }
  t += `</tr>`;
}

document.write(t);


