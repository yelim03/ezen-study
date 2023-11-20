// 호이스팅 = hoisting => 끌어올리다

let count = 0;

function myfnc() {
  count++;
  document.write(`hello ${count}, <br>`);
};

myfnc();

let theFnc = () => {
  count++;
  document.write(`bye ${count}`);
};
theFnc();