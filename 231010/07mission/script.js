// let Ftem = prompt("화씨온도를 입력해주세요");
// let Ctem = (Ftem - 32) / 1.8;

// alert(`화씨 ${Ftem}도는 섭씨 ${Ctem}도 입니다!`);

let fah = parseFloat(prompt("변환한 화씨온도를 입력해주세요!"));
let cel = ((fah - 32) / 1.8).toFixed(2); //소수점자리수 고정
alert(`화씨 ${fah}도는 섭씨 ${cel}도 입니다!`);
