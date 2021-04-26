import React from "react";
import Banner from "../Banner";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <section className="top-sales">
            <h2 className="text-center">Страница не найдена</h2>
            <p>Извините, такая страница не найдена!</p>
            <p>
              Вы можете перейти на <Link to="/">главную страницу</Link>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
