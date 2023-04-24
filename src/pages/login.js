import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/users-thunks";

function LoginScreen() {
  const [user, setUser] = useState({
    username: "JamesC18",
    password: "test123",
    firstName: "James",
    lastName: "Colesanti",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async () => {
    await dispatch(loginThunk(user));
    navigate("/");
  };

  return (
    <div className={"m-2 d-flex flex-column align-items-center"}>
      <div>
        <h1>Login</h1>
      </div>
      <div className="form-group m-1">
        <div className={"m-1"}>
          <label>Username</label>
          <input
              type="text"
              className="form-control w-100"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className={"m-1"}>
          <label>Password</label>
          <input
              type="password"
              className="form-control w-100"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className={"m-2 d-flex justify-content-center"}>
          <button onClick={login} className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;