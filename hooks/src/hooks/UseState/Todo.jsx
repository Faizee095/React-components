import { useState } from "react";

const Todo = () => {
  const info = [
    {
      date: "24Feb",
      prodcution: "marvel",
      name: "nickFury",
    },
    {
      date: "24Feb",
      prodcution: "DC",
      name: "Batman",
    },
    {
      date: "24Feb",
      prodcution: "SpyUniverse",
      name: "Salman Bhai",
    },
  ];
  const [data, setData] = useState(info);
  const handleDetails = (e) => {
    debugger
    const newData = data.filter((i) => {
      return i.name !== e.name;
    });
    setData( newData );
  };
  return (
    <div className="app">
      <div className="section-three">
        {data.map((item, i) => (
          <>
            <div key={i} className="list-item">
              <h5>
                {`Its a ${item.prodcution} movie releasing on ${item.date} with lead actor as ${item.name}`}
              </h5>
              <button className="btn-todo" onClick={() => handleDetails(item)}>
                --
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Todo;
