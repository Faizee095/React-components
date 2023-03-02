import React, { useState } from "react";
import { useAUth } from "../Auth/Auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAUth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath  = location.state?.path || '/'

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath ,{replace:true});
  };
  return (
    <>
      <label>Username</label>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
