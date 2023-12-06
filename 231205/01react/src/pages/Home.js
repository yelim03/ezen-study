import React, { useState } from "react";
import Header from "../component/Header";
import Button from "../component/Button";

const Home = () => {
  const today = new Date();
  const [pivotDate, setPivotDate] = useState(today);
  const pivotYear = pivotDate.getFullYear();
  const pivotMonth = pivotDate.getMonth() + 1;
  const headerTitle = `${pivotYear}년 ${pivotMonth}월`;
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotYear, pivotMonth));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotYear, pivotMonth - 2));
  };
  return (
    <div>
      <Header
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        title={headerTitle}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
    </div>
  );
};

export default Home;
