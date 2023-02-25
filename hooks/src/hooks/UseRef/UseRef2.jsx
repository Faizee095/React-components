import { useRef } from "react";

const UseRef2 = () => {
  const inputOne = useRef(0);
  const inputTwo = useRef(null);

const getNum = () => {
    const num = inputOne.current;
    num.style.width = '400px'
}

const getText = () => {
    const num = inputTwo.current;
    num.style.width = '200px'
}

  return (
    <>
      <div>
        <label>Number</label>
        <input type="number" ref={inputOne} />
        <label>text</label>
        <input type="text" ref={inputTwo} />
      </div>
      <div>
        <button onClick={() => getNum()}>Update Num</button>
        <button onClick={() => getText()}>Update Text</button>
      </div>
    </>
  );
};

export default UseRef2;
