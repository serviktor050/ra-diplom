import React from "react";
import { NavLink } from "react-router-dom";
//import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          activeClassName={"nav-link active"}
          to="/"
        >
          Главная
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          activeClassName={"nav-link active"}
          to="/catalog.html"
        >
          Каталог
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          activeClassName={"nav-link active"}
          to="/about.html"
        >
          О магазине
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          activeClassName={"nav-link active"}
          to="/contacts.html"
        >
          Контакты
        </NavLink>
      </li>
    </ul>
  );
}
