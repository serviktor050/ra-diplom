import React from "react";
import { Link } from "react-router-dom";

export default function CatalogFilter() {
  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link active" to="#">
          Все
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">
          Женская обувь
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">
          Мужская обувь
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">
          Обувь унисекс
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">
          Детская обувь
        </Link>
      </li>
    </ul>
  );
}
