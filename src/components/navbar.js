import {NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.users);
  
  return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand text-muted" href="/"><strong>TuneTalk</strong></a>
            <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" end>Home</NavLink>
                </li>
                { currentUser ? 
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">Profile</NavLink>
                </li> : 
                <>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/register">Register</NavLink>
                  </li>
                </>
                }

              </ul>
              <form className="d-flex">
                  <button className="btn btn-secondary my-2 my-sm-0">
                      <a className={ "text-decoration-none"} href="/search/">Search</a>
                  </button>
              </form>
            </div>
          </div>
        </nav>
      </>
  );
};
export default Navbar;