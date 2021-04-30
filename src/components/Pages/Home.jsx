import React from "react";
import Banner from "../Banner";
import SalesHits from "../SalesHits";
import CatalogComponent from "../CatalogComponent";

export default function Home() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <SalesHits />
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <CatalogComponent />
          </section>
        </div>
      </div>
    </main>
  );
}
