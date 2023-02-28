import React, { useState } from "react";
import ShowModal from "./ShowModal";

const Modal = () => {
  const [show, setShow] = useState(false);

  const closeModal = () => {
    setShow(false);
  };

  const mainModal = (
    <ShowModal closeModal={closeModal}>
        <button className="btn" onClick={closeModal}>
          X
        </button>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cum velit
          fuga culpa minima enim esse atque dolores. Nihil, mollitia culpa. Aut
          labore fuga voluptatum pariatur eos a expedita iusto?
        </p>
    </ShowModal>
  )

  return (
    <>
      <div>
        <button onClick={() => setShow(true)}>Open Modal</button>
        {show && mainModal}
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Modal;
