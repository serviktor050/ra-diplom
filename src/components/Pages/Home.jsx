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
          <p>Домашняя страница</p>
          <SalesHits />
          <CatalogComponent />
        </div>
      </div>
    </main>
  );
}
