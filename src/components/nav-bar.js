import {useSelector} from "react-redux";
import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.currentUser);

  return (
        <nav className="navbar navbar-expand navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand text-muted" href="/"><strong>TuneTalk</strong></a>
            <div className="navbar-collapse collapse show" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/" end>Home</NavLink>
                  </li>
                </li>
                {currentUser ?
                    <li className="nav-item">
                      <NavLink className="nav-link"
                               to="/profile" end>Profile</NavLink>
                    </li> :
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link"
                                 to="/login">Login</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link"
                                 to="/register">Register</NavLink>
                      </li>
                    </>
                }
              </ul>
              <form className="d-flex">
                <button className="btn btn-secondary my-2 my-sm-0">
                  <a className={"text-decoration-none"}
                     href="/search/">Search</a>
                </button>
              </form>
            </div>
          </div>
        </nav>
  );
};
export default Navbar;