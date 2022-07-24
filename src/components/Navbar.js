import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav-center">
        <img className="logo" src={logo} alt="the cocktail db" />
        <ul className="nav-links">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
