const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.stroke();

//나비 만들기
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(150, 100);
// ctx.lineTo(250, 50);
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = "rga(0, 200, 0)";
// ctx.fill();

//원
//arc(x,y,r, 시작각도"래디언", 종료각도"래디언", 반시계방향으로 = 기본)
// ctx.fillStyle = "yellow";
// ctx.strokeStyle = "red";

// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// ctx.closePath();
// ctx.fill();
// ctx.stroke();

//반원
// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true);
// ctx.arc(200, 100, 50, 0, (Math.PI / 180) * 180, false);
// ctx.closePath();
// ctx.fill();
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
// ctx.closePath();
// ctx.stroke();

// ctx.strokeStyle = "blue";
// ctx.moveTo(200, 100);
// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
// ctx.stroke();

//타원

// ctx.strokeStyle = "red";
// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
// ctx.stroke();

// ctx.strokeStyle = "blue";
// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
// ctx.stroke();

//타원을 만드는 두번째 방법
// ctx.scale(1, 0.7);
// ctx.strokeStyle = "blue";
// ctx.beginPath();
// ctx.arc(200, 150, 80, 0, (Math.PI / 180) * 180 * 2, true);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(200, 150, 30, 0, (Math.PI / 180) * 180 * 2, false);
// ctx.stroke();
// ctx.closePath();

//베지에
// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200);
// ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 100);
ctx.quadraticCurveTo(100, 50, 150, 100);
ctx.quadraticCurveTo(200, 150, 250, 100);
ctx.stroke();
