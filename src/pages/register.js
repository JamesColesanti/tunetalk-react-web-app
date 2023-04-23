import React, { useState } from "react";
import * as userService from "../services/users-service";
import { useNavigate } from "react-router-dom";
import {registerThunk} from "../services/users-thunks";
import {useDispatch} from "react-redux";

function RegisterScreen() {
  const [user, setUser] = useState({
    username: "alice",
    password: "alice",
    firstName: "Alice",
    lastName: "Wonderland",
    email: "awonderland@gmail.com",
  });
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const register = async () => {
    dispatch(registerThunk(user))
    navigate("/");
  };
  
  return (
      <div className={"m-2 d-flex flex-column align-items-center"}>
        <div>
          <h1>Register</h1>
        </div>
      <div className="form-group w-50">
        <div className={"m-1"}>
          <label>Username</label>
          <input
              type="text"
              className="form-control"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className={"m-1"}>
          <label>Password</label>
          <input
              type="password"
              className="form-control"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className={"m-1"}>
          <label>First Name</label>
          <input
              type="text"
              className="form-control"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
        </div>
        <div className={"m-1"}>
          <label>Last Name</label>
          <input
              type="text"
              className="form-control"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </div>
        <div className={"m-1"}>
          <label>Email</label>
          <input
              type="text"
              className="form-control"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className={"m-2 d-flex justify-content-center"}>
          <button onClick={register} className="btn btn-primary">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;