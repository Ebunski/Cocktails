import React from "react";
import { Link, NavLink, Navlink } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav-center">
        <img className="logo" src={logo} alt="the cocktail db" />
        <ul className="nav-links">
          <li>
            <NavLink to={"/"}>
              <a href="#">home</a>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>
              {" "}
              <a href="#">about</a>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
