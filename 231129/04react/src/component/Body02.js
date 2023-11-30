import React, { useState, useRef } from "react";

const Body02 = () => {
  const [text, setText] = useState("");
  const textRef = useRef();
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = () => {
    if (text.length < 5) {
      textRef.current.focus();
    } else {
      alert(text);
      setText("");
    }
  };

  return (
    <div>
      <div>
        <input ref={textRef} value={text} onChange={handleOnChange} />
        <button onClick={handleOnClick}>작성완료</button>
      </div>
    </div>
  );
};

export default Body02;
