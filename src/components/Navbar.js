import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav-center">
        <Link to={"/"}>
          <img className="logo" src={logo} alt="the cocktail db" />
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "btn btn-white"
              }
            >
              <a href="/#">home</a>
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "btn btn-white"
              }
            >
              <a href="/#">about</a>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
