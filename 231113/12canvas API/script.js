const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//canvas API
//도형 => 네모(*내장메서드), 원, 선, 삼각형, 호
//beginPath() / fillStyle, strokeStyle
//fillRect(), strorkeRect()
//moveTo(),lineTo(), clearRect()

//원점의 위치를 옮기는 메서드 = translate().

ctx.fillStyle = "#ccc";
ctx.fillRect(10,10,100,100);
ctx.save();

ctx.translate(150,150);

ctx.fillStyle="#222";
ctx.fillRect(10,10,100,100);



