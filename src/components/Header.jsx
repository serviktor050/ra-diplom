import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import headerLogo from "../img/header-logo.png";
import { useState } from "react";

export default function Header() {
  const [searchFieldView, setSearchFieldView] = useState(true);

  const handleClickSearchFieldView = () => {
    if (!searchFieldView) {
      setSearchFieldView(true);
    } else {
      setSearchFieldView(false);
    }
  };

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              <img src={headerLogo} alt="Bosa Noga" />
            </Link>
            <div className="collapase navbar-collapse" id="navbarMain">
              <Menu />
              <div>
                <div className="header-controls-pics">
                  <div
                    data-id="search-expander"
                    className="header-controls-pic header-controls-search"
                    onClick={() => {
                      handleClickSearchFieldView();
                    }}
                  ></div>
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form
                  data-id="search-form"
                  className={`header-controls-search-form form-inline ${
                    searchFieldView && "invisible"
                  }`}
                >
                  <input className="form-control" placeholder="Поиск" />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
