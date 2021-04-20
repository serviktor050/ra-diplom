import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="col">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src="/img/header-logo.png" alt="Bosa Noga" />
        </Link>
        <div className="collapase navbar-collapse" id="navbarMain">
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
        </div>
      </nav>
    </div>
  );
}
