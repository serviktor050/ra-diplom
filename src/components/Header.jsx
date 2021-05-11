import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import headerLogo from "../img/header-logo.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchField } from "../redux/productsList/actions/actionsCreators";

export default function Header() {
  const { productsList } = useSelector((state) => state.cartList);

  const [searchFieldView, setSearchFieldView] = useState(true);
  const [searchFieldInput, setSearchFieldInput] = useState("");

  const dispatch = useDispatch();

  const handleClickSearchFieldView = () => {
    if (!searchFieldView) {
      setSearchFieldView(true);
    } else {
      setSearchFieldView(false);
    }
  };

  const handleSearch = (evt) => {
    setSearchFieldInput(evt.target.value);
    dispatch(changeSearchField(evt.target.value));
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
                  {!searchFieldInput && (
                    <>
                      <div
                        data-id="search-expander"
                        className="header-controls-pic header-controls-search"
                        onClick={() => {
                          handleClickSearchFieldView();
                        }}
                      ></div>
                    </>
                  )}
                  {searchFieldInput && (
                    <>
                      <Link to="/catalog.html">
                        <div
                          data-id="search-expander"
                          className="header-controls-pic header-controls-search"
                          onClick={() => {
                            handleClickSearchFieldView();
                          }}
                        ></div>
                      </Link>
                    </>
                  )}
                  <Link to="/cart.html">
                    <div className="header-controls-pic header-controls-cart">
                      {productsList && productsList.length !== 0 && (
                        <div className="header-controls-cart-full">
                          {productsList.length}
                        </div>
                      )}
                      {productsList === null && (
                        <div className="header-controls-cart-menu"></div>
                      )}
                    </div>
                  </Link>
                </div>
                <form
                  data-id="search-form"
                  className={`header-controls-search-form form-inline ${
                    searchFieldView && "invisible"
                  }`}
                >
                  <input
                    className="form-control"
                    placeholder="Поиск"
                    onChange={handleSearch}
                  />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
