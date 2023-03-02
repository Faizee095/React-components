import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useAUth } from "./Auth/Auth";

const Navbar = () => {
  const auth = useAUth();
  console.log(auth.user);
  return (
    <div>
      <ul className="list">
        <Link className="list-item" to={"/"}>
          Home
        </Link>
        <Link className="list-item" to={"/users"}>
          Users
        </Link>
        <Link className="list-item" to={"/about"}>
          About
        </Link>
        <Link className="list-item" to={"/admin"}>
          Admin
        </Link>
        {!auth.user && (
          <Link className="list-item" to={"/login"}>
            Login
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
