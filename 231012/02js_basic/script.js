

// let today = new Date();
// let nowMonth = today.getMonth() + 1;
// let nowDate = today.getDate();

// document.write(`<h1>오늘 날짜 정보</h1>`);
// document.write(`현재 월 : ${nowMonth} <br/>`);
// document.write(`현재 일 : ${nowDate} <br/>`);

// let classOpen = new Date(`2023/08/22`);
// let theMonth = classOpen.getMonth() + 1;
// let theDate= classOpen.getDate();
// document.write(`<h1>강의 개강 날짜 정보</h1>`);
// document.write(`현재 월 : ${theMonth} <br/>`);
// document.write(`현재 일 : ${theDate} <br/>`);


let today = new Date();
let nowYear = today.getFullYear();

let theDate = new Date(nowYear,11, 31);
let diffDate = theDate.getTime() - today.getTime();

let result = Math.ceil(diffDate / (60 * 60 * 24 * 1000)); //  Math.ceil : 반올림  Math.floorl : 내림 
document.write(`연말 D-day : ${result} 일 남았습니다.`);

