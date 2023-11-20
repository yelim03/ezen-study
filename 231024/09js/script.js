//toDateString(): Date에서 날자 부문만 표시할 때 사용하는 메서드

let today = new Date();
let passedTime = today.getTime(today.toDateString());
let passedDay = passedTime / (1000 * 60 * 60 *24);
