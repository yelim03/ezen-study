import React, { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    return () => {
      console.log("EVEN 컴포넌트 언마운트");
    };
  });

  return <div>현재 카운트는 짝수입니다.</div>;
};

export default Even;
