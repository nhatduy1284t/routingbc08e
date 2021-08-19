import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand text-warning" to="/">
          Cybersoft
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                activeStyle={{ background: "#ffffff", color: "black" }}
                activeClassName="active"
                className="nav-link"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ background: "#ffffff", color: "black" }}
                activeClassName="active"
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ background: "#ffffff", color: "black" }}
                activeClassName="active"
                className="nav-link"
                to="/hoc"
              >
                Higher Order Component
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ background: "#ffffff", color: "black" }}
                activeClassName="active"
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ background: "#ffffff", color: "black" }}
                activeClassName="active"
                className="nav-link"
                to="/register"
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hooks
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/usestate">
                  UseState
                </NavLink>
                <NavLink className="dropdown-item" to="/useeffect">
                  Use Hook
                </NavLink>
                <NavLink className="dropdown-item" to="/reduxhook">
                  Redux Hook
                </NavLink>
                
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Axios
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/ajaxrcc">
                  Ajax react class
                </NavLink>
                <NavLink className="dropdown-item" to="/ajaxrfc">
                  Ajax react function
                </NavLink>
                <NavLink className="dropdown-item" to="/apimiddleware">
                  Api Middle ware
                </NavLink>  
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
