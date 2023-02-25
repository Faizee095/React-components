import React, { useEffect, useState } from "react";

const UseEffect2 = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const actualWidth = () => {
    setWidth(window.innerWidth)
  }

  //Effect cleanup
  useEffect(() => {
    window.addEventListener("resize" , actualWidth);
    return () => {
        window.removeEventListener("resize" ,actualWidth);
    }
  })
  return (
    <div className="app">
      <div className="section-one">
        <h3>Size of window</h3>
        <h2>{width}</h2>
      </div>
    </div>
  );
};

export default UseEffect2;
