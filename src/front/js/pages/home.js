import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="d-flex justify-content-center flex-column text-center mt-2">
        <h1 style={{ color: "orange" }}> Programa y comparte tu entrega ...</h1>
        <Link to="/compartir">
          {" "}
          <h5 className="mb-3 text-white w-25" style={{ background: "orange" }}>
            <i class="fa-solid fa-circle-arrow-right text-white"></i> ... y
            ahorra el tiempo y dinero
          </h5>
        </Link>
      </div>

      <div className="text-center my-3 position-relative">
        <h1 style={{ color: "orange" }}> ...o haz un pedido turbo</h1>
        <img
          src="https://i.stack.imgur.com/HILmr.png"
          height="400px"
          className=""
        />
      </div>
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
            Pedido Turbo{" "}
            <i class="fa-solid fa-rocket" style={{ color: "orange" }}></i>
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
            Puedo esperar{" "}
            <i class="fa-solid fa-clock" style={{ color: "orange" }}></i>
          </button>
        </li>
      </ul>
      <div class="tab-content m-3" id="myTabContent">
        <div
          class="tab-pane fade show active mt-3"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          {" "}
          <div className="d-flex justify-content-center">
            <p class="d-inline-flex gap-1">
              <button
                class="btn btn-primary m-3"
                style={{ background: "orange" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Restaurantes
              </button>
            </p>
            <div class="collapse" id="collapseExample">
              <div class="card card-body">La lista de restaurantes</div>
            </div>
            <p class="d-inline-flex gap-1">
              <button
                class="btn btn-primary m-3"
                style={{ background: "orange" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample2"
                aria-expanded="false"
                aria-controls="collapseExample2"
              >
                Supermercados
              </button>
            </p>
            <div class="collapse" id="collapseExample2">
              <div class="card card-body">La lista de supermercados</div>
            </div>
            <p class="d-inline-flex gap-1">
              <button
                class="btn btn-primary m-3"
                style={{ background: "orange" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample3"
                aria-expanded="false"
                aria-controls="collapseExample3"
              >
                Farmacias
              </button>
            </p>
            <div class="collapse" id="collapseExample3">
              <div class="card card-body">La lista de farmacias</div>
            </div>
            <p class="d-inline-flex gap-1">
              <button
                class="btn btn-primary m-3"
                style={{ background: "orange" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample4"
                aria-expanded="false"
                aria-controls="collapseExample4"
              >
                Alimentación
              </button>
            </p>
            <div class="collapse" id="collapseExample4">
              <div class="card card-body">
                La lista de tiendas de alimentación
              </div>
            </div>
            <p class="d-inline-flex gap-1">
              <button
                class="btn btn-primary m-3"
                style={{ background: "orange" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample5"
                aria-expanded="false"
                aria-controls="collapseExample5"
              >
                Tiendas de mascotas
              </button>
            </p>
            <div class="collapse" id="collapseExample5">
              <div class="card card-body">La lista de tiendas de mascotas</div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade m-3"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary m-3"
              style={{ background: "orange" }}
            >
              Restaurantes
            </button>
            <button
              className="btn btn-primary m-3"
              style={{ background: "orange" }}
            >
              Supermercados
            </button>
            <button
              className="btn btn-primary m-3"
              style={{ background: "orange" }}
            >
              Farmacias
            </button>
            <button
              className="btn btn-primary m-3"
              style={{ background: "orange" }}
            >
              Alimentaciòn
            </button>
            <button
              className="btn btn-primary m-3"
              style={{ background: "orange" }}
            >
              Tiendas de mascotas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
