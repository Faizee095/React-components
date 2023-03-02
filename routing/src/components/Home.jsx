import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css'

const Home = () => {
  const navigate = useNavigate();

  //Navigate Programatically
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div>
      <p>Home</p>
      <button className="btn" onClick={handleClick}>About</button>
    </div>
  );
};

export default Home;
