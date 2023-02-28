import React, { useEffect } from "react";
import "./App.css";
import { createPortal } from "react-dom";

const ShowModal = ({ closeModal, children }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  });
  return createPortal(
    <>
      <div className="overlay" onClick={closeModal}></div>
      <div className="modal">{children}</div>
    </>,
    document.querySelector(".myPortalModalDiv")
  );
};

export default ShowModal;
