//배열 객체 => 내장메서드

// let arr_1 = ["사당", "교대", "방배", "강남"];
// let arr_2 = ["신사","압구정","옥수"];

// document.write(arr_1, "<br/>");
// document.write(arr_2, "<br/>");

// let result = arr_1.join("-"); 
// document.write(result, "<br/>");

// result = arr_1.concat(arr_2);
// document.write(result, "<br/>");

// result = arr_1.slice(1, 3); 
// document.write(result, "<br/>");

// arr_1.sort();//오름차순
// document.write(arr_1, "<br/>"); 

// arr_2.reverse();
// document.write(arr_2, "<br/>"); 

let greenArr = ["교대", "방배", "강남"];
let yellowArr = ["미금", "정자", "수서"];

document.write(greenArr, "<br/>");
document.write(yellowArr, "<br/>");

greenArr.splice(2, 1, "서초", "역삼");
document.write(greenArr, "<br/>");

let data1 = yellowArr.pop();// 가장마지막 아이템 잘라내기
document.write(data1, "<br/>");

let data2 = yellowArr.shift();// 가장앞에 아이템 잘라내기
document.write(data2, "<br/>");

yellowArr.push(data2); // 
document.write(yellowArr, "<br/>");

yellowArr.unshift(data1); // 
document.write(yellowArr, "<br/>");

