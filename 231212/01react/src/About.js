import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const gotoHomePage = () => {
    navigate("/");
  };
  return (
    <div>
      <div>About Page</div>
      <button onClick={gotoHomePage}>Go to Home Page</button>
    </div>
  );
};

export default About;
