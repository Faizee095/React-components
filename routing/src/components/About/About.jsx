import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../index.css";

const About = () => {
  return (
    <>
      <div>
        <p>About</p>
      </div>
      <nav>
        {/* If in to={""} we provide just path name then that path will be appended to existing path in URL like we have used here. This is called Relative link */}
        <Link className="list-item" style={{ marginRight: "20px" }} to={"us"}>
          About Us
        </Link>
        <Link className="list-item" to={"team"}>
          Team Details
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default About;
