import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Compartir = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <ul
        class="nav nav-tabs justify-content-center mt-4"
        id="myTab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Programar nueva entrega{" "}
            <i
              class="fa-solid fa-calendar-days"
              style={{ color: "orange" }}
            ></i>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Ùnete a una entrega{" "}
            <i class="fa-solid fa-clock" style={{ color: "orange" }}></i>
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active  m-3"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <div class="input-group mb-3 mt-3">
            <span class="input-group-text" id="basic-addon1">
              <i className="fa-solid fa-magnifying-glass" style={{ color: "orange" }}></i>
            </span>
            <input
              type="search"
              class="form-control"
              placeholder="Bùsqueda"
              aria-label="Bùsqueda"
              aria-describedby="basic-addon1"
            />
          </div>
          <ul class="list-group m-4">
            <h5 style={{ color: "orange" }}>Por distancia</h5>
            <li class="list-group-item">menos de 1 km</li>
            <li class="list-group-item">2 km</li>
            <li class="list-group-item">5 km</li>
            <li class="list-group-item">màs de 5 km</li>
          </ul>
          <ul class="list-group m-4">
            <h5 style={{ color: "orange" }}>Por servicio</h5>
            <li class="list-group-item">Restaurantes</li>
            <li class="list-group-item">Farmacias</li>
            <li class="list-group-item">Supermercados</li>
            <li class="list-group-item">Alimentaciòn</li>
            <li class="list-group-item">Tiendas de mascotas</li>
          </ul>

          <ul class="list-group m-4">
            <h5 style={{ color: "orange" }}>Por horario</h5>
            <li class="list-group-item">7:00 - 12:00</li>
            <li class="list-group-item">12:00 - 16:00</li>
            <li class="list-group-item">16:00 - 20:00</li>
            <li class="list-group-item">20:00 - 24:00</li>
          </ul>
        </div>
        <div
          class="tab-pane fade m-3"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          <div className="d-flex justify-content-center flex-column mt-3">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <i className="fa-solid fa-magnifying-glass" style={{ color: "orange" }}></i>
            </span>
            <input
              type="search"
              class="form-control"
              placeholder="Bùsqueda"
              aria-label="Bùsqueda"
              aria-describedby="basic-addon1"
            />
          </div>
            <ul class="list-group m-4">
              <h5 style={{ color: "orange" }}>Por distancia</h5>
              <li class="list-group-item">menos de 1 km</li>
              <li class="list-group-item">2 km</li>
              <li class="list-group-item">5 km</li>
              <li class="list-group-item">màs de 5 km</li>
            </ul>
            <ul class="list-group m-4">
              <h5 style={{ color: "orange" }}>Por servicio</h5>
              <li class="list-group-item">Restaurantes</li>
              <li class="list-group-item">Farmacias</li>
              <li class="list-group-item">Supermercados</li>
              <li class="list-group-item">Alimentaciòn</li>
              <li class="list-group-item">Tiendas de mascotas</li>
            </ul>

            <ul class="list-group m-4">
              <h5 style={{ color: "orange" }}>Por tiempo de espera</h5>
              <li class="list-group-item"> menos de 10 minutos</li>
              <li class="list-group-item">10 minutos</li>
              <li class="list-group-item">20 minutos</li>
              <li class="list-group-item">30 minutos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
