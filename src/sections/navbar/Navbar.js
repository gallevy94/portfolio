import React from "react";
import Logo from "../../assets/logo.png";
import data from "./data";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
