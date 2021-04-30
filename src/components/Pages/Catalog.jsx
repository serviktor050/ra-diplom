import React from "react";
import Banner from "../Banner";
import CatalogComponent from "../CatalogComponent";
import SearchField from "../SearchField";

export default function Catalog() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <SearchField />
            <CatalogComponent />
          </section>
        </div>
      </div>
    </main>
  );
}
