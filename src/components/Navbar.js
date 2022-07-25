import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav-center">
        <img className="logo" src={logo} alt="the cocktail db" />
        <div className="nav-links">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "btn btn-primary" : "btn btn-white"
            }
          >
            <a href="/#">home</a>
          </NavLink>

          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "btn btn-primary" : "btn btn-white"
            }
          >
            {" "}
            <a href="/#">about</a>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
