import React, { useRef, useState } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const [show, setShow] = useState(false);

  const SubmitForm = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    setShow(true);
  };

  return (
    <div>
      <form onSubmit={SubmitForm}>
        <div>
          <label>Enter Your Name</label>
          <input type="text" ref={inputRef} />
        </div>
        <button>Submit</button>
      </form>
      <span>{show ? inputRef.current.value : ""}</span>
    </div>
  );
};

export default UseRef;
