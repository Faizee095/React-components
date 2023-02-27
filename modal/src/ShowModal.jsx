import React, { useEffect } from "react";
import "./App.css";

const ShowModal = ({ closeModal }) => {

    useEffect(() => {
        document.body.style.overflowY= 'hidden';
        return () => {document.body.style.overflowY= 'scroll'};
    })
  return (
    <>
      <div className="overlay" onClick={closeModal}></div>
      <div className="modal">
        <button className="btn" onClick={closeModal}>
          X
        </button>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cum velit
          fuga culpa minima enim esse atque dolores. Nihil, mollitia culpa. Aut
          labore fuga voluptatum pariatur eos a expedita iusto?
        </p>
      </div>
    </>
  );
};

export default ShowModal;
