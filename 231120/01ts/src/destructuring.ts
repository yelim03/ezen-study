type Person = {
  name: string;
  age: number;
};

const printPerson = ({ name, age }: Person): void => {
  console.log(`name:${name}, age:${age}`);
};
printPerson({ name: "park", age: 10 });

//객체는 key & value로 구성된 하나의 property(*속성)들로 이루어져 있음

const makeObject = (key: string, value: string) => ({ [key]: value });
console.log(makeObject("name", "park"));
