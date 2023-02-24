import { useState } from "react";
import "../../App.css"

const Usestate = () => {
  const [name, setName] = useState(true);
  const [data, setData] = useState({
    date: "24Feb",
    movie: "marvel",
    id: "nickFury",
    show: false,
  });
  const handleDetails = () => {
    setData({ ...data, show: !data["show"] });
  };
  return (
    <div className="app">
      <div className="section-one">
        <h1>{name ? "Hi I am Samuel" : "I am an actor"}</h1>
        <button className="btn" onClick={() => setName(!name)}>
          update
        </button>
      </div>
      <div className="section-two">
        <h5>
          {!data["show"]
            ? `My birthday is ${data["date"]}`
            : `Worked in ${data["movie"]} character name ${data["id"]}`}
        </h5>
        <button className="btn" onClick={() => handleDetails()}>
          show Details
        </button>
      </div>
    </div>
  );
};

export default Usestate;
