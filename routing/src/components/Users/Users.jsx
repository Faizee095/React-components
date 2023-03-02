import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Users = () => {
  const [serachParams, setSerachParams] = useSearchParams();
  const show = serachParams.get("filter") === "active";
  return (
    <div>
      <div>
        <button
          onClick={() => setSerachParams({ filter: "active" })}
          style={{ marginRight: "20px" }}
          className="btn"
        >
          Active Users
        </button>
        <button onClick={() => setSerachParams({})} className="btn">
          All Users
        </button>
      </div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100px",
          justifyContent: "space-around",
        }}
      >
        {show ? (
          <>
            <Link to="1" className="list-item">
              User1
            </Link>
            <Link to="2" className="list-item">
              User2
            </Link>
          </>
        ) : (
          <>
            <Link to="1" className="list-item">
              User1
            </Link>
            <Link to="2" className="list-item">
              User2
            </Link>
            <Link to="3" className="list-item">
              User3
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default Users;
