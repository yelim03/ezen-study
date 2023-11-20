let first = new Date(nowYear,11, 31);

let future = first + 100*(100*60*60*24);
let today = new Date(future);
let nowYear = today.getFullYear();
let nowMonth = today.getMonth();
let nowDate = today.getDate();

document.write(`${future}`);
