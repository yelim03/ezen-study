let scores = [90, 35, 64, 88, 45, 92];
//score 라는 배열안에 있는 아이템들 중 85이살값만 따로 필터링해서 별도의 변수로 담아 놓고 싶을때

let highScores = scores.filter((score) => score >= 85);
console.log(highScores);

